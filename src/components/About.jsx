import * as React from "react";

import Section from "./Reusables/Section";
import background from "../assets/about-stock-image.jpeg";

function About() {
    
    return (

        <Section className={`h-[50vh] flex-col text-center gap-7 bg-[url(${background})] bg-cover bg-center`}>
            <div className="font-[Gilroy-Bold] text-[var(--club-yellow)] text-6xl font-bold">about cube<sup>3</sup></div>
            <div className="font-[Gilroy-Bold] text-xl w-1/2 text-white">
                <p>
                    Cube<sup>3</sup> is a student-ran cubesat and small spacecraft development club
                    at San Jose State University. We aim to provide students with hands-on 
                    experience developing our projects within three subteams: Mechanical, Electrical, and Controls.

                </p>
                <hr className="h-[10px] invisible"/>
                <p>
                    We welcome members from all experience levels, majors, and goals, 
                    with the goal of creating an environment that allows for any ideas to be
                    explored to its fullest potential.
                </p>
            </div>
        </Section>
    );
}

export default About;