import { listNotes } from '../../helpers/Notes';
import Key from './Key';
import { NoteInformation } from './Note';

interface Params {
    firstNote?: NoteInformation;
    lastNote?: NoteInformation;
}

export default function Piano({ firstNote, lastNote }: Params) {
    const firstNoteDefault = new NoteInformation('C', 2);
    const lastNoteDefault = new NoteInformation('C', 5);
    const noteList = listNotes(
        firstNote ?? firstNoteDefault,
        lastNote ?? lastNoteDefault
    );
    const visibleNotes = noteList.map((noteInfo: NoteInformation) => (
        <Key key={noteInfo.getNote()} noteInfo={noteInfo} />
    ));
    return <div>{visibleNotes}</div>;
}
