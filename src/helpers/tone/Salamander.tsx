import { NoteInformation } from '../../components/piano/Note';
import { listNotes } from '../Notes';

export const base_url = 'https://tonejs.github.io/audio/salamander/';

export const urls = listNotes(
    new NoteInformation('A', 1),
    new NoteInformation('C', 8)
).reduce(
    (acc, noteInfo) => ({
        ...acc,
        [noteInfo.getNote()]: noteInfo.isSharp()
            ? `${noteInfo.key.charAt(0)}s${noteInfo.octave}.mp3`
            : `${noteInfo.getNote()}.mp3`,
    }),
    {}
);

console.log(urls);
