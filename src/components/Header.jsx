import * as React from "react";
import IMAGES from "../assets/images/images";

export default function Header({ refs }) {
    return (
        <div className="flex fixed top-0 left-0 right-0 h-[10vh] z-[1] justify-between font-gilroy text-club-yellow">
            <div className="flex justify-start pl-5 pt-1 space-x-2">
                <img src={IMAGES.image1} alt='first image' />
                <h1 className="pt-2 text-2xl">Cube<sup>3</sup></h1>
            </div>
            <div className="pr-2 bottom-0 pt-3 inline-block align-top">
                <span className="hover:text-blue-400 cursor-pointer" onClick={() => refs.aboutRef.current.scrollIntoView({ behavior: "smooth" })}>about </span>|
                <span className="hover:text-blue-400 cursor-pointer" onClick={() => refs.projectRef.current.scrollIntoView({ behavior: "smooth" })}> projects </span>|
                <span className="hover:text-blue-400 cursor-pointer" onClick={() => refs.javelinRef.current.scrollIntoView({ behavior: "smooth" })}> JAVELIN </span>|
                <span className="hover:text-blue-400 cursor-pointer" onClick={() => refs.contactsRef.current.scrollIntoView({ behavior: "smooth" })}> contacts </span>
            </div>
        </div>
    );
}
