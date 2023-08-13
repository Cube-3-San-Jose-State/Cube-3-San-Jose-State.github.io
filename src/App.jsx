import React from "react";
import Header from "./components/Header";
import Landing from "./components/Landing";
import About from "./components/About";
import Javelin from "./components/Javelin";
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

export default () => (
    <>
        <Header />
        <Landing />
        <About />
        <Javelin />
    </>
);
