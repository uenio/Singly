import { NoteInformation } from '../components/note';

export type NoteType = {
    [key: string]: string;
};

export const notes: NoteType[] = [
    {
        note: 'C',
        color: 'white',
    },
    {
        note: 'C#',
        color: 'black',
    },
    {
        note: 'D',
        color: 'white',
    },
    {
        note: 'D#',
        color: 'black',
    },
    {
        note: 'E',
        color: 'white',
    },
    {
        note: 'F',
        color: 'white',
    },
    {
        note: 'F#',
        color: 'black',
    },
    {
        note: 'G',
        color: 'white',
    },
    {
        note: 'G#',
        color: 'black',
    },
    {
        note: 'A',
        color: 'white',
    },
    {
        note: 'A#',
        color: 'black',
    },
    {
        note: 'B',
        color: 'white',
    },
];

export function listNotes(
    firstNote: NoteInformation,
    lastNote: NoteInformation
): NoteInformation[] {
    let result: NoteInformation[] = [];
    if (firstNote.octave < lastNote.octave) {
    } else if (firstNote.octave == lastNote.octave) {
        const noteTypes: NoteType[] = notes.filter(
            (noteType: NoteType) => noteType.note >= firstNote.key
        );
        const noteInfo: NoteInformation[] = noteTypes.map(
            (noteType: NoteType): NoteInformation =>
                new NoteInformation(noteType.note, firstNote.octave)
        );
        result = noteInfo;
    }

    return result;
}
