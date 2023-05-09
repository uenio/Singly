import './Piano.css';

import { useState } from 'react';
import { listNotes } from '../../helpers/Notes';
import Key from './Key';
import { NoteInformation } from './Note';
import PianoSettings from './PianoSettings';
import { notesToPlay } from '../../helpers/WarmUps';
import { Logger, ILogObj } from 'tslog';
import { play } from '../../helpers/SoundController';
import * as Tone from 'tone';

const log: Logger<ILogObj> = new Logger();

interface Params {
    firstNote?: NoteInformation;
    lastNote?: NoteInformation;
}

export default function Piano({ firstNote, lastNote }: Params) {
    const [shouldHoldNote, setShouldHoldNote] = useState(true);

    function handleShouldHoldNote() {
        setShouldHoldNote(!shouldHoldNote);
    }

    const firstNoteDefault = new NoteInformation('C', 3);
    const lastNoteDefault = new NoteInformation('C', 4);
    const noteList = listNotes(
        firstNote ?? firstNoteDefault,
        lastNote ?? lastNoteDefault
    );
    const visibleNotes = noteList.map((noteInfo: NoteInformation) => (
        <Key
            key={noteInfo.getNote()}
            noteInfo={noteInfo}
            shouldHoldNote={shouldHoldNote}
        />
    ));

    const notes = notesToPlay(
        firstNote ?? firstNoteDefault,
        lastNote ?? lastNoteDefault,
        [1, 3, 5]
    );
    let delay = Tone.now();
    notes.forEach((n) => {
        delay += 5;
        play(n, delay);
    });
    log.debug(notes);

    return (
        <div className="piano">
            <PianoSettings
                shouldHoldNote={shouldHoldNote}
                handleShouldHoldNote={handleShouldHoldNote}
            />
            {visibleNotes}
        </div>
    );
}
