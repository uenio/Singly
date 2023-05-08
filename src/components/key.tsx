import { play } from '../helpers/sound';
import { NoteInformation } from './note';

interface KeyProps {
    noteInfo: NoteInformation;
}

export const Key = (props: KeyProps) => {
    const note = props.noteInfo.getNote();
    return <button onClick={() => play(note)}>{note}</button>;
};
