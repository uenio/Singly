import { NoteInformation } from '../components/piano/Note';
import _ from 'lodash';

export type NoteType = {
    [key: string]: string;
};

export const baseNotes: string[] = [
    'A',
    'A#',
    'B',
    'C',
    'C#',
    'D',
    'D#',
    'E',
    'F',
    'F#',
    'G',
    'G#',
];

export function listNotes(
    firstNote: NoteInformation,
    lastNote: NoteInformation
): NoteInformation[] {
    let result: NoteInformation[] = [];
    if (firstNote.octave < lastNote.octave) {
        const firstNotes: NoteInformation[] = baseNotes
            .filter((note: string) => note >= firstNote.key)
            .map(
                (note: string): NoteInformation =>
                    new NoteInformation(note, firstNote.octave)
            );
        const middleNotes: NoteInformation[] = _.range(
            firstNote.octave + 1,
            lastNote.octave
        ).reduce(
            (acc: NoteInformation[], octave: number) =>
                acc.concat(
                    baseNotes.map(
                        (note: string): NoteInformation =>
                            new NoteInformation(note, octave)
                    )
                ),
            []
        );
        const endingNotes: NoteInformation[] = baseNotes
            .filter((note: string) => note <= lastNote.key)
            .map(
                (note: string): NoteInformation =>
                    new NoteInformation(note, lastNote.octave)
            );
        result = result.concat(firstNotes, middleNotes, endingNotes);
    } else if (firstNote.octave == lastNote.octave) {
        const noteTypes: string[] = baseNotes.filter(
            (note: string) => note >= firstNote.key && note <= lastNote.key
        );
        const noteInfo: NoteInformation[] = noteTypes.map(
            (note: string): NoteInformation =>
                new NoteInformation(note, firstNote.octave)
        );
        result = noteInfo;
    }

    return result;
}
