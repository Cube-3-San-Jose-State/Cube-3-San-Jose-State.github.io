import * as React from "react";
import Section from "./Reusables/Section";
import IMAGES from "../assets/images/images";

function Javelin(props, ref) {
    return (
        <Section className="h-screen font-noto flex-col text-center gap-7" style={{ background: `url(${IMAGES.javelinBackground}) no-repeat center`, backgroundSize: "cover" }} ref={ref}>
            <div className="flex flex-col justify-center items-center">
                <img className="h-[30vh]" src={IMAGES.javelinLogo} alt="Javelin logo" />
                <div className='text-5xl font-gilroy text-white leading-tight'>JAVELIN</div>
            </div>
            <div className='w-1/2 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente mollitia animi, libero sequi ipsa voluptatem eius aliquam quidem repudiandae ratione ipsam sed porro soluta recusandae asperiores, dolorum quis dolor totam?</div>
            <div className='w-3/4 h-[30%] bg-gray-500 text-center text-6xl'>timeline here</div>
        </Section>
    );
}

export default React.forwardRef(Javelin);