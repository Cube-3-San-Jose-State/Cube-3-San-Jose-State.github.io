import * as React from "react";

function Projects() {
    return (
        <div className="bg-cover h-[50vh] font-[Gilroy-Bold] flex justify-center items-center text-center px-[300px] py-[50px] bg-[url(public/stock-satellite-image.jpeg)]">
            <div>
             
                <h1 className="text-[70px] text-[var(--club-yellow)]"> 
                    projects
                </h1>
                <p className="text-[20px] text-[white]">
                    Explore a realm of limitless possibilities with SJSU Cube3 projects.Venture into the universe of miniature satellites 
                    as we develop a CanSat alongside new members. Witness the magic as this compact marvel undertakes a myriad of tasks during 
                    its descent from great heights – from deploying a heatshield to capturing video footage and landing gracefully, all 
                    within the dimensions of a soda can. Alternatively, immerse yourself in the Nodes Project, crafting a sensor network 
                    that observes volcanic activity near Popocatépetl. 
                </p>
            </div>
        </div>
    );
}

export default Projects;