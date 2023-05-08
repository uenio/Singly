import { Button } from 'reactstrap';
import { play } from '../../helpers/Sound';
import { NoteInformation } from './Note';

interface KeyProps {
    noteInfo: NoteInformation;
}

export const Key = (props: KeyProps) => {
    const note = props.noteInfo.getNote();
    return (
        <Button color="primary" onClick={() => play(note)}>
            {note}
        </Button>
    );
};
