import { Logger, ILogObj } from 'tslog';
import { NoteInformation } from '../components/piano/Note';
import { baseNotes } from './Notes';

const log: Logger<ILogObj> = new Logger();

const inter1 = [1, 5, 8];
const inter2 = [2, 6, 9];

export function notesToPlay(
    startingNote: NoteInformation,
    endingNote: NoteInformation,
    pattern: number[]
): string[][] {
    const referenceNotes: string[] = baseNotes;
    const endingKey = endingNote.key;
    const endingOctave = endingNote.octave;
    let currentNoteIndex = referenceNotes.indexOf(startingNote.key);
    let currentOctave = startingNote.octave;
    const result: string[][] = [];

    while (currentOctave < endingOctave) {
        pattern.forEach((num: number) =>
            result.push([getNote(currentNoteIndex, currentOctave, num)])
        );
        const inter1Notes = inter1.map((num: number) =>
            getNote(currentNoteIndex, currentOctave, num)
        );
        const inter2Notes = inter2.map((num: number) =>
            getNote(currentNoteIndex, currentOctave, num)
        );

        result.push(inter1Notes, inter2Notes);
        currentNoteIndex++;
        if (currentNoteIndex >= referenceNotes.length) {
            currentNoteIndex = 0;
            currentOctave++;
        }
    }

    return result;
}

function getNote(noteIndex: number, octave: number, offset: number): string {
    const referenceNotes: string[] = baseNotes;
    const arrayIndex: number = noteIndex - 1 + offset;
    const note: string =
        arrayIndex >= referenceNotes.length
            ? `${referenceNotes.at(
                  arrayIndex - referenceNotes.length
              )}${octave}`
            : `${referenceNotes.at(arrayIndex)}${octave}`;

    return note;
}
