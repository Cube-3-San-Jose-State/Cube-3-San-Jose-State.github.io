import * as React from "react";
import Section from "./Reusables/Section";
import IMAGES from "../assets/images/images";

function Projects(props, ref) {
    return (
        <Section className={"h-[50vh] text-center"} style={{ background: `url(${IMAGES.projectBackground}) no-repeat center`, backgroundSize: "cover" }} ref={ref}>
            <div className="w-[55vw] text-white font-gilroy">
                <h1 className="text-5xl text-[var(--club-yellow)] mb-[1rem]">
                    projects
                </h1>
                <p className="font-noto">
                    Our projects are entirely student led, with students being able to experience each phase of a 
                    typical spacecraft development cycle. Past projects range from volcano monitoring nodes, to 
                    beginner friendly cansats.
                    
                    <hr className="h-[3vh] invisible" />

                    Our tight knit group of less than 15 students ensure that each voice is heard, and each 
                    contribution is noticed. Ultimately, members come away with valuable experience under their belt, 
                    and meaningful relationships with experienced students with internships at NASA, Maxar, MOOG, and more.
                </p>
            </div>
        </Section>
    );
}

export default React.forwardRef(Projects);