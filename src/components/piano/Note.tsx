export class NoteInformation {
    key: string;
    octave: number;
    duration: number;

    constructor(key: string, octave: number, duration = 4) {
        this.key = key;
        this.octave = octave;
        this.duration = duration;
    }

    public getNote(): string {
        return this.key + this.octave;
    }

    public isSharp(): boolean {
        return this.key.length > 1;
    }
}
