import React, { useState } from 'react';
import { Editor, EditorState, RichUtils, getDefaultKeyBinding, Modifier } from 'draft-js';
import 'draft-js/dist/Draft.css';
import '../assets/css/WritingPad.css';
import html2pdf from "html2pdf.js";
import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from 'file-saver';

const WritingPad = () => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    // Custom color styles
    const styleMap = {
        'RED': {
            color: 'red',
        },
        'BLUE': {
            color: 'blue',
        },
        //... you can add other colors similarly
    };

    const handleKeyCommand = (command, editorState) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            setEditorState(newState);
            return 'handled';
        }
        return 'not-handled';
    };

    const toggleInlineStyle = (style) => {
        setEditorState(RichUtils.toggleInlineStyle(editorState, style));
    };

    const toggleBlockType = (type) => {
        setEditorState(RichUtils.toggleBlockType(editorState, type));
    };

    const handleAlignment = (direction) => {
        const contentState = editorState.getCurrentContent();
        const selectionState = editorState.getSelection();
        const newContentState = Modifier.setBlockData(
            contentState,
            selectionState,
            { textAlign: direction }
        );
        const newEditorState = EditorState.push(editorState, newContentState, 'change-block-data');
        setEditorState(newEditorState);
    };

    const toggleColor = (toggledColor) => {
        const selection = editorState.getSelection();
        const nextContentState = Object.keys(styleMap)
            .reduce((contentState, color) => {
                return Modifier.removeInlineStyle(contentState, selection, color);
            }, editorState.getCurrentContent());

        let nextEditorState = EditorState.push(
            editorState,
            nextContentState,
            'change-inline-style'
        );

        const currentStyle = editorState.getCurrentInlineStyle();

        if (!currentStyle.has(toggledColor)) {
            nextEditorState = RichUtils.toggleInlineStyle(
                nextEditorState,
                toggledColor
            );
        }

        setEditorState(nextEditorState);
    };
    const saveAsPDF = () => {
        const content = document.querySelector('.writing-area');
        const opt = {
            margin: 10,
            filename: 'myfile.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };
        html2pdf().from(content).set(opt).save();
    }

    const saveAsWord = () => {
        const content = editorState.getCurrentContent().getPlainText();

        const doc = new Document({
            sections: [
                {
                    properties: {},
                    children: [
                        new Paragraph({
                            children: [
                                new TextRun(content)
                            ],
                        }),
                    ],
                },
            ],
        });

        Packer.toBlob(doc).then(blob => {
            saveAs(blob, "document.docx");
        });
    }

    return (
        <div className='writing-pad-container'>
            <div className="app-title">Writing Project Environment</div>
            <div className="workspace">
                <div className="writing-tools">
                    <button onClick={() => toggleInlineStyle('BOLD')}>
                        <i className="fa fa-bold"></i>
                    </button>
                    <button onClick={() => toggleInlineStyle('ITALIC')}>
                        <i className="fa fa-italic"></i>
                    </button>
                    <button onClick={() => toggleInlineStyle('UNDERLINE')}>
                        <i className="fa fa-underline"></i>
                    </button>
                    <button onClick={() => toggleBlockType('header-one')}>
                        <i className="fa fa-header"></i>1
                    </button>
                    <button onClick={() => toggleBlockType('header-two')}>
                        <i className="fa fa-header"></i>2
                    </button>
                    <button onClick={() => toggleBlockType('blockquote')}>
                        <i className="fa fa-quote-left"></i>
                    </button>
                    <button onClick={() => toggleBlockType('unordered-list-item')}>
                        <i className="fa fa-list-ul"></i>
                    </button>
                    <button onClick={() => toggleBlockType('ordered-list-item')}>
                        <i className="fa fa-list-ol"></i>
                    </button>
                    <button onClick={() => handleAlignment('left')}>
                        <i className="fa fa-align-left"></i>
                    </button>
                    <button onClick={() => handleAlignment('center')}>
                        <i className="fa fa-align-center"></i>
                    </button>
                    <button onClick={() => handleAlignment('right')}>
                        <i className="fa fa-align-right"></i>
                    </button>
                    <button onClick={() => handleAlignment('justify')}>
                        <i className="fa fa-align-justify"></i>
                    </button>
                    <select onChange={(e) => toggleColor(e.target.value)}>
                        <option value="">Color</option>
                        <option value="RED">Red</option>
                        <option value="BLUE">Blue</option>
                    </select>
                    <button onClick={saveAsPDF}>Save as PDF</button>
                    <button onClick={saveAsWord}>Save as Word</button>
                </div>
                <div className="writing-area">
                    <Editor 
                        customStyleMap={styleMap}
                        editorState={editorState} 
                        handleKeyCommand={handleKeyCommand}
                        keyBindingFn={getDefaultKeyBinding}
                        onChange={setEditorState}
                    />
                </div>
            </div>
        </div>
    );
};

export default WritingPad;
