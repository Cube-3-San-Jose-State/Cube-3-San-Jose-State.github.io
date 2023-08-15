import * as React from "react";

function About() {
    return (
        <div className="bg-cover h-[50vh] font-[Gilroy-Bold] flex justify-center items-center text-center px-[300px] py-[50px] bg-[url(/about-stock-image.jpeg)]">
            <div>
                <h1 className="text-[70px] text-[var(--club-yellow)]"> 
                    about cube<sup className="text-[35px]">3</sup>
                </h1>
                <p className="text-[20px] text-[white]">
                    Cube<sup className="text-[10px]">3</sup> is a student-ran cubesat and small spacecraft development club
                    at San Jose State University. We aim to provide students with hands-on 
                    experience developing our projects within three subteams: Mechanical, Electrical, and Controls.

                </p>
                <hr className="h-[10px] invisible"/>
                <p className="text-[20px] text-[white]">
                    We welcome members from all experience levels, majors, and goals, 
                    with the goal of creating an environment that allows for any ideas to be
                    explored to its fullest potential.
                </p>
            </div>
        </div>
    );
}

export default About;