import React from "react";
import Title from "./Title.js";
import ProjectSection from "./ProjectSection.js";
import SkillBar from "./SkillBar.js";
import About from "./About.js";
import CardPage from "./CardPage.js";
// import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      {/* <Link to="/homepage">  */}
     <Title />
     <ProjectSection />
     <SkillBar />
     <About />
     <CardPage />
     {/* 
      */}
    </div>
  )
}
export default Homepage; 