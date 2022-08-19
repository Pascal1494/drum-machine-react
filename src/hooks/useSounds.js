import { useState, useEffect, useRef } from 'react';

import * as Tone from 'tone'

import casta from "../assets/sounds/casta.wav"
import clap from "../assets/sounds/clap.wav"
import hh from "../assets/sounds/hh.wav"
import kick from "../assets/sounds/kick.wav"


export default function useSounds() {
    const mySampler = useRef(null);

    const [isCastaPlayed, isCastaPlayedChange] = useState(false);
    const [isClapPlayed, isClapPlayedChange] = useState(false);
    const [isHHPlayed, isHHPlayedChange] = useState(false);
    const [isKickPlayed, isKickPlayedChange] = useState(false);

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
                isCastaPlayedChange(true);
                window.setTimeout(() => isCastaPlayedChange(false), 300);
                soundPlay("C4");
                break;

            case "z":
                isClapPlayedChange(true);
                window.setTimeout(() => isClapPlayedChange(false), 300);
                soundPlay("D#4");
                break;

            case "e":
                isHHPlayedChange(true);
                window.setTimeout(() => isHHPlayedChange(false), 300);
                soundPlay("F#4");
                break;

            case "r":
                isKickPlayedChange(true);
                window.setTimeout(() => isKickPlayedChange(false), 300);
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
            soundPlay: () => soundPlay("C4"),
            isPlayed: isCastaPlayed,
            id: "casta"
        },
        {
            soundPlay: () => soundPlay("D#4"),
            isPlayed: isClapPlayed,
            id: "clap"
        },
        {
            soundPlay: () => soundPlay("F#4"),
            isPlayed: isHHPlayed,
            id: "hh"
        },
        {
            soundPlay: () => soundPlay("C4"),
            isPlayed: isKickPlayed,
            id: "kick"
        },
    ];


    return { buttonsList };
}