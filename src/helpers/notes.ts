import { NoteInformation } from '../components/note';
import _ from 'lodash';

export type NoteType = {
    [key: string]: string;
};

export const notes: NoteType[] = [
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
];

export function listNotes(
    firstNote: NoteInformation,
    lastNote: NoteInformation
): NoteInformation[] {
    let result: NoteInformation[] = [];
    if (firstNote.octave < lastNote.octave) {
        const firstNotes: NoteInformation[] = notes
            .filter((noteType: NoteType) => noteType.note >= firstNote.key)
            .map(
                (noteType: NoteType): NoteInformation =>
                    new NoteInformation(noteType.note, firstNote.octave)
            );
        const middleNotes: NoteInformation[] = _.range(
            firstNote.octave + 1,
            lastNote.octave
        ).reduce(
            (acc: NoteInformation[], octave: number) =>
                acc.concat(
                    notes.map(
                        (noteType: NoteType): NoteInformation =>
                            new NoteInformation(noteType.note, octave)
                    )
                ),
            []
        );
        const endingNotes: NoteInformation[] = notes
            .filter((noteType: NoteType) => noteType.note <= lastNote.key)
            .map(
                (noteType: NoteType): NoteInformation =>
                    new NoteInformation(noteType.note, lastNote.octave)
            );
        result = result.concat(firstNotes, middleNotes, endingNotes);
    } else if (firstNote.octave == lastNote.octave) {
        const noteTypes: NoteType[] = notes.filter(
            (noteType: NoteType) =>
                noteType.note >= firstNote.key && noteType.note <= lastNote.key
        );
        const noteInfo: NoteInformation[] = noteTypes.map(
            (noteType: NoteType): NoteInformation =>
                new NoteInformation(noteType.note, firstNote.octave)
        );
        result = noteInfo;
    }

    return result;
}
