import React from "react";
import Header from "./Components/Header/Header";
import Landing from "./Components/Landing/Landing";
import About from './Components/About/About';
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
    <Header/>
    <Landing/>
    <About/>
  </>
);
