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
                    Explore a realm of limitless possibilities with SJSU Cube3 projects. Venture into the universe of miniature satellites
                    as we develop a CanSat alongside new members. Witness the magic as this compact marvel undertakes a myriad of tasks during
                    its descent from great heights - from deploying a heatshield to capturing video footage and landing gracefully, all
                    within the dimensions of a soda can. Alternatively, immerse yourself in the Nodes Project, crafting a sensor network
                    that observes volcanic activity near Popocatépetl.
                </p>
            </div>
        </Section>
    );
}

export default React.forwardRef(Projects);