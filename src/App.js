import React from "react";
import "./App.css";
import ParticlesBackground from "./components/ParticlesBackground";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import ProjectSection from "./components/ProjectSection";
import SkillBar from "./components/SkillBar";
import About from "./components/About";
import CardPage from "./components/CardPage";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Gallery from "./components/Gallery";
import Content from "./components/Content";

function App() {
  return (
      <BrowserRouter>
        <ParticlesBackground />
        <Navbar />
        <Switch>
          
        <Title name="Sahil" leadText="Full Stack Developer" />
        <ProjectSection />
        <h1 className=" container text-success text-center my-5" style={{fontSize:"4rem"}}>Skills-Bar</h1>
        <SkillBar />
        <About />
        <CardPage />
        <Route exact path="/">
        </Route>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/picture" component={Gallery}/>
        <Route exact path="/content" component={Content} />
        <Route exact path="/blog" component={Blog} />
        </Switch>
        <Footer />
        
        </BrowserRouter>
  );
}

export default App;
