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

    function soundPlay(note) {
        mySampler.current.triggerAttackRelease([note], 4);
    }

    function handleKeyDown({ key }) {
        switch (key) {
            case "a":
                soundPlay("C4");
                break;
           
            case "z":
                soundPlay("D#4");
                break;
            
            case "e":
                soundPlay("F#4");
                break;
            
            case "r":
                soundPlay("A4");
                break;
            default:
    }
    }

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [])

    const buttonsList = [
        {
            soundPlay: () => soundPlay("C4")
        },
        {
            soundPlay: () => soundPlay("D#4")
        },
        {
            soundPlay: () => soundPlay("F#4")
        },
        {
            soundPlay: () => soundPlay("C4")
        },
    ];


    return { buttonsList };
}