import './Key.css';

import { useState } from 'react';
import { endPlaying, play, startPlaying } from '../../helpers/SoundController';
import { NoteInformation } from './Note';

export default function Key({
    noteInfo,
    shouldHoldNote = false,
}: {
    noteInfo: NoteInformation;
    shouldHoldNote?: boolean;
}) {
    const [isPlaying, setIsPlaying] = useState(false);
    const note = noteInfo.getNote();
    const isSharp = noteInfo.isSharp();

    function onKeyDown() {
        if (!isPlaying) {
            if (shouldHoldNote) {
                play(note);
            } else {
                startPlaying(note);
                setIsPlaying(true);
            }
        }
    }

    function onKeyUp() {
        if (isPlaying) {
            endPlaying(note);
            setIsPlaying(false);
        }
    }

    let keyClassName = 'key';
    if (isSharp) {
        keyClassName += ' sharp';
    }
    if (isPlaying) {
        keyClassName += ' pressed';
    }
    if (isSharp) {
        return (
            <div
                className={keyClassName}
                onMouseDown={onKeyDown}
                onMouseUp={onKeyUp}
                onMouseOut={onKeyUp}
            ></div>
        );
    }

    return (
        <div
            className={keyClassName}
            onMouseDown={onKeyDown}
            onMouseUp={onKeyUp}
            onMouseOut={onKeyUp}
        >
            <div className="key-text">{note.toUpperCase()}</div>
        </div>
    );
}
