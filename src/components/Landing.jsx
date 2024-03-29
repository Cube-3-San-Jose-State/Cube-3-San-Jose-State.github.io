import * as React from "react";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import Section from "./Reusables/Section";
import IMAGES from "../assets/images/images";


function Landing() {
    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    const particlesOptions = {
        fullScreen: false,
        background: {
            color: {
                value: "#121212",
            },
        },
        fpsLimit: 60,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "grab",
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 1,
                }
            },
        },
        particles: {
            color: {
                value: "#ffffff",
            },
            links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.25,
                width: 1,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "out",
                },
                random: false,
                speed: 1,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 1000,
                },
                value: 50,
            },
            opacity: {
                value: 0.25,
            },
            shape: {
                type: "star",
            },
            size: {
                value: { min: 1, max: 4 },
            },
        }
    };

    return (
        <Section className="supports-[height:100cqh]:h-[100cqh] supports-[height:100svh]:h-[100svh]"> {/* This is to handle iOS 100vh issue */}
            <img src={IMAGES.landingBackground} className="w-2/5 z-1 absolute right-0 bottom-0 animate-fade pointer-events-none select-none" alt="" />
            <Particles className="w-full h-full" init={particlesInit} options={particlesOptions} />
            <h1 className="font-gilroy text-6xl sm:max-lg:text-8xl text-[var(--club-yellow)] leading-tight left-[7vw] absolute animate-fade">
                cube satellites <br />
                & small spacecrafts <br />
                @ san jose state
            </h1>
        </Section>
    );
}

export default Landing;