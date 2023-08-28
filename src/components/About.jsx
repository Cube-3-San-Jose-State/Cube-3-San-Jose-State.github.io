import * as React from "react";
import Section from "./Reusables/Section";
import IMAGES from "../assets/images/images";

function About(props, ref) {
    return (
        <Section className={"h-[50vh] font-noto text-center"} style={{ background: `url(${IMAGES.aboutBackground}) no-repeat center`, backgroundSize: "cover" }} ref={ref}>
            <div className="w-[55vw] text-[white]">
                <h1 className=" font-gilroy text-5xl text-[var(--club-yellow)] mb-[1rem]">
                    about cube<sup>3</sup>
                </h1>
                <p>
                    Cube<sup>3</sup> is a student-ran cubesat and small spacecraft development club
                    at San Jose State University. We aim to provide students with hands-on
                    experience developing our projects within three subteams: Mechanical, Electrical, and Controls.
                </p>

                <hr className="h-[3vh] invisible" />

                <p>
                    We welcome members from all experience levels, majors, and goals,
                    with the goal of creating an environment that allows for any ideas to be
                    explored to its fullest potential.
                </p>
            </div>
        </Section>
    );
}

export default React.forwardRef(About);