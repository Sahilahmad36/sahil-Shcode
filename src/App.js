import React from "react";
import "./App.css";
// import ParticlesBackground from "./components/ParticlesBackground";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Gallery from "./components/Gallery";
import Content from "./components/Content";
import Homepage from "./components/Homepage";
import Testimonials from "./components/Testimonials";





function App() {
  return (
    <BrowserRouter> 
    {/* <ParticlesBackground /> */}
    <Navbar />
    
    <Switch>
    
    
    
    <Route exact path="/contact" component={Contact}/>
    <Route exact path="/picture" component={Gallery}/>
    <Route exact path="/content" component={Content} />
    <Route exact path="/blog" component={Blog} />
    <Route exact path="/testimonial" component={Testimonials} />
    <Homepage />
    </Switch>
    
   
    <Footer />
    
    </BrowserRouter>
  );
}

export default App;
