
import React, { useRef, useState, useEffect, useCallback } from 'react';
import '../assets/css/Drawing.css';

const DrawingCanvas = ({ 
    defaultColor = '#000000', 
    defaultLineWidth = 5, 
    defaultShape = 'Free Draw', 
    defaultFillColor = '#FFFFFF' 
}) => {
    const canvasRef = useRef(null);
    const contextRef = useRef(null);
    const [drawMode, setDrawMode] = useState(true);

    const [isDrawing, setIsDrawing] = useState(false);
    const [color, setColor] = useState(defaultColor);
    const [lineWidth, setLineWidth] = useState(defaultLineWidth);
    const [currentShape, setCurrentShape] = useState(defaultShape);
    const [fillColor, setFillColor] = useState(defaultFillColor);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        canvas.width = 800;
        canvas.height = 600;
        context.strokeStyle = color;
        context.lineWidth = lineWidth;
        contextRef.current = context;
    }, [color, lineWidth]);

    const saveCanvas = useCallback(() => {
        const link = document.createElement('a');
        link.href = canvasRef.current.toDataURL();
        link.download = 'drawing.png';
        link.click();
    }, []);

    const clearCanvas = useCallback(() => {
        const context = contextRef.current;
        context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }, []);

    const drawShape = useCallback((x, y) => {
        const context = contextRef.current;
        switch (currentShape) {
            case 'rectangle':
                context.rect(x, y, 100, 50);
                break;
            case 'circle':
                context.arc(x, y, 50, 0, 2 * Math.PI);
                context.closePath(); // ClosePath to complete the circle
                break;
            case 'triangle':
                context.moveTo(x, y);
                context.lineTo(x + 50, y + 87);
                context.lineTo(x - 50, y + 87);
                context.closePath();
                break;
            case 'line':
                context.moveTo(x, y);
                context.lineTo(x + 100, y + 100);
                break;
            case 'ellipse':
                context.ellipse(x, y, 60, 40, 0, 0, 2 * Math.PI);
                break;
            default:
                break;
        }
        context.fillStyle = fillColor;
        context.fill();
        context.strokeStyle = color;
        context.stroke();
    }, [currentShape, fillColor, color]);

    const startDrawing = useCallback((e) => {
        const x = e.clientX - canvasRef.current.offsetLeft;
        const y = e.clientY - canvasRef.current.offsetTop;
    
        if (drawMode) {
            contextRef.current.globalCompositeOperation = 'source-over';
            contextRef.current.strokeStyle = color;
        } else {
            contextRef.current.globalCompositeOperation = 'destination-out';
            contextRef.current.strokeStyle = 'rgba(0,0,0,1)';
        }
    
        if (currentShape !== 'Free Draw') {
            drawShape(x, y);
            return;
        }
        
        contextRef.current.beginPath();
        contextRef.current.moveTo(x, y);
        setIsDrawing(true);
    }, [drawMode, color, drawShape, currentShape]);
    
    const draw = useCallback((e) => {
        if (!isDrawing) return;

        const x = e.clientX - canvasRef.current.offsetLeft;
        const y = e.clientY - canvasRef.current.offsetTop;

        contextRef.current.lineTo(x, y);
        contextRef.current.stroke();
    }, [isDrawing]);

    const stopDrawing = useCallback(() => {
        if (isDrawing) {
            contextRef.current.closePath();
            setIsDrawing(false);
        }
    }, [isDrawing]);

    return (
        <div className='canvas-container'>
            <div className="app-title">Visual Art Project Environment</div>
            <div className="drawing-workspace">
                <div className="drawing-tools">
                    <label>Color: 
                        <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
                    </label>
                    <label>Line Width: 
                        <input type="range" min="1" max="10" value={lineWidth} onChange={(e) => setLineWidth(Number(e.target.value))} />
                    </label>
                    <button onClick={() => setDrawMode(!drawMode)}>
                        {drawMode ? 'Switch to Eraser' : 'Switch to Brush'}
                    </button>
                    <button onClick={clearCanvas}>Clear Canvas</button>
                    <button onClick={saveCanvas}>Save Drawing</button>
                    <label>Shape:
                        <select value={currentShape} onChange={e => setCurrentShape(e.target.value)}>
                            <option value="">Free Draw</option>
                            <option value="rectangle">Rectangle</option>
                            <option value="circle">Circle</option>
                            <option value="triangle">Triangle</option>
                            <option value="line">Line Segment</option>
                            <option value="ellipse">Ellipse</option>
                        </select>
                    </label>
                    <label>Fill Color: 
                        <input type="color" value={fillColor} onChange={e => setFillColor(e.target.value)} />
                    </label>
                </div>
                <div className="canvas-wrapper">
                    <canvas
                        ref={canvasRef}
                        onMouseDown={startDrawing}
                        onMouseMove={draw}
                        onMouseUp={stopDrawing}
                        onMouseLeave={stopDrawing}
                        style={{ border: '1px solid black' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default DrawingCanvas;
