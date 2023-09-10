import * as React from "react";
import Section from "./Reusables/Section";
import IMAGES from "../assets/images/images";

function Javelin(props, ref) {
    return (
        <Section className="h-screen font-noto flex-col text-center gap-7" style={{ background: `url(${IMAGES.javelinBackground}) no-repeat center`, backgroundSize: "cover" }} ref={ref}>
            <div className="flex flex-col justify-center items-center">
                <img className="w-1/2" src={IMAGES.javelinLogo} alt="Javelin logo" />
                <div className='text-5xl sm:max-lg:text-8xl font-gilroy text-white leading-tight'>JAVELIN</div>
            </div>
            <div className="w-[55vw] sm:max-lg:w-[75vw] text-white sm:max-lg:text-4xl">
                Project JAVELIN is a can-satellite that will be launched via our self-developed high power rocket. 
                It will be deployed from ~2000 feet and transmit flight data to our ground control in real time.
                
                <hr className="h-[3vh] invisible"/>
                
                The can-satellite will be the culmination of knowledge and work from our controls, electrical, mechanical, and 
                rocketry sub-teams, over three semesters.
            </div>
        </Section>
    );
}

export default React.forwardRef(Javelin);