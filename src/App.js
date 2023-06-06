import React from "react";
import "./App.css";
// import ParticlesBackground from "./components/ParticlesBackground";
import Navbar from "./components/Navbar";
// import Title from "./components/Title";
// import ProjectSection from "./components/ProjectSection";
// import SkillBar from "./components/SkillBar";
// import About from "./components/About";
// import CardPage from "./components/CardPage";

import Footer from "./components/Footer";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Gallery from "./components/Gallery";
import Content from "./components/Content";
import Homepage from "./components/Homepage";
// import Abouts from "./components/Abouts";


function App() {
  return (
    <BrowserRouter>
    {/* <ParticlesBackground /> */}
    <Navbar />
    
    <Switch>
  
    
    {/* <Title /> 
    <ProjectSection />
    
    <SkillBar />
    <About />
    
   <CardPage />  */}
    
    
    
    <Route exact path="/contact" component={Contact}/>
    <Route exact path="/picture" component={Gallery}/>
    <Route exact path="/content" component={Content} />
    <Route exact path="/blog" component={Blog} />
    <Homepage />
    </Switch>
   {/* <Abouts /> */}
    <Footer />
    
    </BrowserRouter>
  );
}

export default App;
