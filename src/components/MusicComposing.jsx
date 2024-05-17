import React, { useState, useRef } from 'react';
import { Synth, start as ToneStart, Destination, getContext } from 'tone';
import { saveAs } from 'file-saver';
import '../assets/css/music.css';

const NOTES = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

function MusicComposing() {
    const [recording, setRecording] = useState(false);
    const [audioURL, setAudioURL] = useState(null);
    const [volume, setVolume] = useState(0.5);
    const recorderRef = useRef(null);
    const audioChunksRef = useRef([]);
    const synth = new Synth().toDestination();

    const playNote = async (note) => {
        await ToneStart();
        synth.volume.value = volume * 10 - 20;  // Convert slider value to dB
        synth.triggerAttackRelease(note + '4', '8n');
    };

    const handleVolumeChange = (event) => {
        setVolume(event.target.value);
    };

    const startRecording = async () => {
        try {
            // Access the user's microphone
            const micStream = await navigator.mediaDevices.getUserMedia({ audio: true });

            const ac = getContext();
            const dest = ac.createMediaStreamDestination();
            Destination.connect(dest);

            // Combine microphone and tone.js streams
            const micSource = ac.createMediaStreamSource(micStream);
            micSource.connect(dest);

            const recorder = new MediaRecorder(dest.stream);
            recorderRef.current = recorder;

            recorder.ondataavailable = event => {
                audioChunksRef.current.push(event.data);
            };

            recorder.onstop = () => {
                const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
                setAudioURL(URL.createObjectURL(audioBlob));
            };

            recorder.start();
            setRecording(true);
        } catch (error) {
            console.error("Error accessing microphone:", error);
            alert("Error accessing microphone. Please make sure you've granted permissions.");
        }
    };

    const stopRecording = () => {
        if (recorderRef.current) {
            recorderRef.current.stop();
            setRecording(false);
        }
    };

    const downloadRecording = () => {
        if (audioURL) {
            saveAs(audioURL, 'melody_with_voice.wav');
        }
    };

    return (
        <div className="music-container">
            <h2 className="music-title">Music Composing Environment</h2>
            
            <div className="volume-control">
                <label className="volume-label" htmlFor="volume">Volume:</label>
                <input type="range" id="volume" min="0" max="1" step="0.1" value={volume} onChange={handleVolumeChange} />
            </div>

            <div className="controls">
                {NOTES.map(note => (
                    <button
                        key={note}
                        className="note-button"
                        onClick={() => playNote(note)}
                    >
                        {note}
                    </button>
                ))}
            </div>
            
            <div className="recording-controls">
                <button 
                    onClick={recording ? stopRecording : startRecording}
                    className={`recording-button ${recording ? "stop" : "start"}`}
                >
                    {recording ? 'Stop Recording' : 'Start Recording'}
                </button>
                {audioURL && (
                    <button onClick={downloadRecording} className="download-button">
                        Download Recording
                    </button>
                )}
            </div>

            {audioURL && (
                <div className="player">
                    <audio controls src={audioURL}></audio>
                </div>
            )}
        </div>
    );
}

export default MusicComposing;