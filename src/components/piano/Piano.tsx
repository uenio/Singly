import { useState } from 'react';
import { listNotes } from '../../helpers/Notes';
import Key from './Key';
import { NoteInformation } from './Note';
import PianoSettings from './PianoSettings';

interface Params {
    firstNote?: NoteInformation;
    lastNote?: NoteInformation;
}

export default function Piano({ firstNote, lastNote }: Params) {
    const [shouldHoldNote, setShouldHoldNote] = useState(true);

    function handleShouldHoldNote() {
        setShouldHoldNote(!shouldHoldNote);
    }

    const firstNoteDefault = new NoteInformation('C', 2);
    const lastNoteDefault = new NoteInformation('C', 5);
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

    return (
        <div>
            <PianoSettings
                shouldHoldNote={shouldHoldNote}
                handleShouldHoldNote={handleShouldHoldNote}
            />
            {visibleNotes}
        </div>
    );
}
