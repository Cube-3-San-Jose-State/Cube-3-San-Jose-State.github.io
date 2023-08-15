import * as React from "react";
import Section from "./Reusables/Section";

import JavelinLogo from "../assets/javelin-logo.png"

export default function Javelin() {
    return (
        <Section className={`h-screen flex-col text-center gap-7 bg-[url(./assets/javelin-bg.png)] bg-cover bg-center`}>
            <img className="w-[250px]" src={JavelinLogo} alt="Javelin logo" />
            <div className="font-[Gilroy-Bold] text-6xl font-bold text-white">JAVELIN</div>
            <div className="font-[Gilroy-Bold] text-xl w-1/2 text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente mollitia animi, 
                libero sequi ipsa voluptatem eius aliquam quidem repudiandae ratione ipsam sed 
                porro soluta recusandae asperiores, dolorum quis dolor totam?
            </div>
            <div className="w-3/4 h-[30%] bg-gray-500 text-center text-6xl">timeline here</div>
        </Section>
    );
}
