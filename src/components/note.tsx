export class NoteInformation {
    key: string
    octave: number

    constructor(key: string, octave: number) {
        this.key = key
        this.octave = octave
    }

    public getNote(): string {
        return this.key + this.octave
    }
}
