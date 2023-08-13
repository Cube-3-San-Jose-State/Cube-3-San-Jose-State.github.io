import React, { createRef } from "react";
import Header from "./components/Header";
import Landing from "./components/Landing";
import About from "./components/About";
import "./App.css";
/*
  Page diagram:
    ---- transparent fixed 10 vh header
    | 100 vh landing page
    ---------------------
    | 50 vh about cube3, about, member counts
    | 50 vh header for projects, include past project
    ---------------------
    | 100 vh javelin -> link to it's own page
    ---------------------
    | 
*/
/*These references are for the navigation in the header component
    References are created in App.jsx then passed as props to each component
    Implemented this way to access different elements across components
*/
const aboutRef = React.createRef();
const projectRef = React.createRef();
const javelinRef = React.createRef();
const contactsRef = React.createRef();
const refs = {aboutRef,projectRef,javelinRef,contactsRef}

export default () => (
    <>
        <Header refs = {refs}/>
        <Landing refs = {refs.projectRef}/>
        <About refs = {refs.aboutRef}/>
    </>
);
