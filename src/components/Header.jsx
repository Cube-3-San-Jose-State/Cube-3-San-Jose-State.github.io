import * as React from "react";
import logo from "../assets/club-logo.png";

function Header({refs}) {
    const handleClick = (refName) => {
        if (refName == "about") {
            refs.aboutRef.current.scrollIntoView({behavior: "smooth"});
        }
        else if (refName == "projects"){ 
            refs.projectsRef.current.scrollIntoView({behavior: "smooth"});
        }
        else if (refName == "JAVELIN"){
            refs.javelinRef.current.scrollIntoView({behavior: "smooth"});
        }
        else if (refName == "contacts"){
            refs.contacts.current.scrollIntoView({behavior: "smooth"});
        }
    };

    return (
        <div className="flex fixed top-0 left-0 right-0 h-[10vh] z-[50] justify-between font-gilroy text-club-yellow items-center">
            <div className="flex items-center ml-[2vw] mt-[1vw] float-left">
                <img className="h-[8vh] mr-[1vw]" src={logo} alt="club logo"/>
                <h1 className="text-5xl">Cube<sup>3</sup></h1>
            </div>
            
            <div className="mr-[1vw]">
                <span className="hover:text-club-blue-light cursor-pointer" onClick={() => handleClick("about")}>about </span>|
                <span className="hover:text-club-blue-light cursor-pointer" onClick={() => handleClick("projects")}> projects </span>|
                <span className="hover:text-club-blue-light cursor-pointer" onClick={() => handleClick("JAVELIN")}> JAVELIN </span>|
                <span className="hover:text-club-blue-light cursor-pointer" onClick={() => handleClick("contacts")}> contact </span>
            </div>
        </div>
    );
}


export default Header;