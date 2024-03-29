import * as React from "react";
import IMAGES from "../assets/images/images";

function Header({ refs }) {


    return (
        <div className="flex fixed top-0 left-0 right-0 h-[10vh] z-[1] justify-between items-center text-club-yellow bg-gradient-to-b from-[rgba(12,12,12,.8)] from-50%">
            <div className="flex items-center ml-[2vw] mt-[1vw] mb-[1vw] float-left">
                <img src={IMAGES.cubeLogo} className="h-[8vh] mr-[1vw]" alt="club logo"/>
                <h1 className="text-4xl sm:max-lg:text-6xl font-gilroy">Cube<sup>3</sup></h1>
            </div>
            <div className="mr-[1vw] font-noto sm:max-lg:text-4xl sm:max-lg:mr-[5vw]">
                <span className="hover:text-club-blue-light transition duration-250 cursor-pointer" onClick={() => refs.aboutRef.current.scrollIntoView({ behavior: "smooth" })}>about </span>|
                <span className="hover:text-club-blue-light transition duration-250 cursor-pointer" onClick={() => refs.projectRef.current.scrollIntoView({ behavior: "smooth" })}> projects </span>|
                <span className="hover:text-club-blue-light transition duration-250 cursor-pointer" onClick={() => refs.javelinRef.current.scrollIntoView({ behavior: "smooth" })}> JAVELIN </span>|
                <span className="hover:text-club-blue-light transition duration-250 cursor-pointer" onClick={() => refs.contactRef.current.scrollIntoView({ behavior: "smooth" })}> contact </span>
            </div>
        </div>
    );
}

export default Header;
