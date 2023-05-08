import { useState } from 'react';
import { endPlaying, play, startPlaying } from '../../helpers/Sound';
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

    return (
        <button color="primary" onMouseDown={onKeyDown} onMouseUp={onKeyUp}>
            {note}
        </button>
    );
}
