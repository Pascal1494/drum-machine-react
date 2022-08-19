import { useEffect, useRef } from 'react';

import * as Tone from 'tone'

import casta from "../assets/sounds/casta.wav"
import clap from "../assets/sounds/clap.wav"
import hh from "../assets/sounds/hh.wav"
import kick from "../assets/sounds/kick.wav"


export default function useSounds() {
    const mySampler = useRef(null);
    useEffect(() => {
        const sampler = new Tone.Sampler({
                "C4": casta,
                "D#4": clap,
                "F#4": hh,
                "A4": kick,
           
        }).toDestination();


        Tone.loaded().then(() => {
            mySampler.current = sampler;
        })

    }, []);

    const buttonsList = [
        { 
            soundPlay: () => mySampler.current.triggerAttackRelease(["C4"], 4),
    },
        { 
            soundPlay: () => mySampler.current.triggerAttackRelease(["D#4"], 4),
    },
        { 
            soundPlay: () => mySampler.current.triggerAttackRelease(["F#4"], 4),
    },
        { 
            soundPlay: () => mySampler.current.triggerAttackRelease(["A4"], 4), 
    },
    ];


    return { buttonsList };
}