import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import "./Home.css";
import {Link} from "react-router-dom";

const Home = () =>{
    const [state]=useState({
        title:"Hi,",
        titleTwo:"I'm Sahil",
        titleThree:"Full Stack Developer,",
       
    });
    return (
        <div className="container">
      

        <div className="home">
            <div className="home-intro">
            <h2>
                <div className="title">{state.title}</div>
                <div className="titleTwo">{state.titleTwo}</div>
                <div className="titleThree">{state.titleThree}</div>
            </h2>
            <div className="text">
           <Typewriter
           options={{
            autoStart:true,
            loop:true,
            delay:60,
            strings: [
                "PASSIONATE FULL STACK DEVELOPER AND TWO YEAR EXPERIENCE IN THIS FIELD.",
                "PASSES THE ABILITY TO SCALE TO GREATE EXTEND BOTH IN FRONT-END AND BACK-END DEVELOPMENT.",
                "AND UI/UX DESIGNER.",
               
            ],
           }}
           
           />
            </div>
            <div className="contact-me">
                <Link to="/contact">
                <button className="button">Contact Me!</button>
                </Link>
           
            </div>
            </div>
        </div>
        
        </div>
    );
}

export default Home;