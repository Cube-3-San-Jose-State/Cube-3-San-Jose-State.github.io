import * as React from "react";

import Section from "./Reusables/Section";
import background from "../assets/stock-satellite-image.jpeg";

function Projects() {
    return (
        <Section className={`h-[50vh] flex-col text-center gap-7 bg-[url(${background})] bg-cover bg-center`}>
            <div className="font-[Gilroy-Bold] text-[var(--club-yellow)] text-6xl font-bold">projects</div>
            <div className="font-[Gilroy-Bold] text-xl w-1/2 text-white">
                Explore a realm of limitless possibilities with SJSU Cube3 projects.Venture into the universe of miniature satellites 
                as we develop a CanSat alongside new members. Witness the magic as this compact marvel undertakes a myriad of tasks during 
                its descent from great heights – from deploying a heatshield to capturing video footage and landing gracefully, all 
                within the dimensions of a soda can. Alternatively, immerse yourself in the Nodes Project, crafting a sensor network 
                that observes volcanic activity near Popocatépetl. 
            </div>
        </Section>
    );
}

export default Projects;
