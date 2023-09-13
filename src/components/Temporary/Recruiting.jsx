import * as React from "react";
import Section from "../Reusables/Section";
import IMAGES from "../../assets/images/images";

function Recruiting(props, ref) {
    return (
        <Section className="h-screen font-noto flex-col text-center gap-7" style={{ background: `url(${IMAGES.javelinBackground}) no-repeat center`, backgroundSize: "cover" }} ref={ref}>
            <div className="w-[55vw] sm:max-lg:w-[75vw] text-white sm:max-lg:text-4xl font-gilroy">
                <h1 className="text-5xl sm:max-lg:text-8xl text-[var(--club-yellow)] mb-[1rem]">
                    interested in joining?
                </h1>
                <p className="font-noto">
                    We are looking for new members for Fall 2023! We are beginning a new flatsat project, a 
                    deconstructed cube satellite which will be used to refine our core flight systems. We 
                    will explore different scientific focuses for an eventual cube satellite.

                    <hr className="h-[3vh] invisible" />

                    Joining Cube³ will get you hands on experience with the satellite/small spacecraft development
                    cycle. You will be able to network with industry speakers and student interns from NASA, Maxar,
                    and Lockheed Martin.   

                    <hr className="h-[3vh] invisible" />

                    We will be recruiting till mid-October. To get involved, fill out our&nbsp;
                    <a target="_blank" href="https://forms.gle/ech78ZSMZPj9hPD39" className="text-[var(--club-yellow)] underline">interest form</a>.
                </p>
            </div>
        </Section>
    );
}

export default React.forwardRef(Recruiting);