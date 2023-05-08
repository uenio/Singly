import { Logger, ILogObj } from 'tslog';
import * as Tone from 'tone';

const log: Logger<ILogObj> = new Logger();

const base_url = 'https://tonejs.github.io/audio/salamander/';
let loaded = false;

const piano = new Tone.Sampler({
    urls: {
        C4: 'C4.mp3',
        'D#4': 'Ds4.mp3',
        'F#4': 'Fs4.mp3',
        A4: 'A4.mp3',
    },
    release: 1,
    baseUrl: base_url,
    onload: () => {
        log.debug('notes loaded');
        loaded = true;
    },
}).toDestination();

export function getBpm(): number {
    return Tone.getTransport().bpm.value;
}

export function setBpm(bpm: number) {
    Tone.getTransport().bpm.value = bpm;
}

export function play(note: string) {
    if (loaded) {
        piano.triggerAttackRelease(note, 4);
        log.debug(`note played: ${note} bpm: ${getBpm()}`);
    }
}

export function startPlaying(note: string) {
    if (loaded) {
        piano.triggerAttack(note);
        log.debug(`note started: ${note}`);
    }
}

export function endPlaying(note: string) {
    if (loaded) {
        piano.triggerRelease(note);
        log.debug(`note ended: ${note}`);
    }
}
