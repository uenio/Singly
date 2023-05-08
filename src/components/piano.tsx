import React from 'react';
import { listNotes } from '../helpers/notes';
import { Key } from './key';
import { NoteInformation } from './note';

interface PianoProps {
    firstNote?: NoteInformation;
    lastNote?: NoteInformation;
}

interface PianoState {
    firstNote: NoteInformation;
    lastNote: NoteInformation;
}

export default class Piano extends React.Component<PianoProps, PianoState> {
    constructor(props: PianoProps) {
        super(props);
        this.state = {
            firstNote: props.firstNote ?? new NoteInformation('C', 3),
            lastNote: props.lastNote ?? new NoteInformation('C', 5),
        };
    }

    render() {
        const visibleNotes = listNotes(
            this.state.firstNote,
            this.state.lastNote
        ).map((noteInfo: NoteInformation) => (
            <Key key={noteInfo.getNote()} noteInfo={noteInfo} />
        ));
        return <div>{visibleNotes}</div>;
    }
}
