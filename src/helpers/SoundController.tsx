import { Logger, ILogObj } from 'tslog';
import * as Tone from 'tone';
import { base_url, urls } from './tone/Salamander';

const log: Logger<ILogObj> = new Logger();
let loaded = false;

const sampler = new Tone.Sampler({
    urls,
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

export function play(note: string | string[], delay?: number) {
    if (loaded) {
        sampler.triggerAttackRelease(note, 4, delay);
        log.debug(`note played: ${note} bpm: ${getBpm()}`);
    }
}

export function startPlaying(note: string | string[]) {
    if (loaded) {
        sampler.triggerAttack(note);
        log.debug(`note started: ${note}`);
    }
}

export function endPlaying(note: string | string[]) {
    if (loaded) {
        sampler.triggerRelease(note);
        log.debug(`note ended: ${note}`);
    }
}
