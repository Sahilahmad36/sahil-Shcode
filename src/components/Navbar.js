import React from "react";
import {Link} from "react-router-dom";
function Navbar(){
    return (
        <nav className=" navbar navbar-expand-md fixed-top">
            
            <img
    alt="logo"
    className="logo"
    src="https://cdn.dribbble.com/users/2142371/screenshots/6071364/media/70b33e43515ffae5365f4cf4d9700e59.png" 
    />
      
            <Link to="/">
                <button className="btn1">Home</button>
                </Link>
            <Link to="/contact" className=" ml-auto mx-3">
           <button className="btn1">Contact me</button>
             </Link>
        
        <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#collapseNav"
        >
          <span className="fas fa-bars text-primary" style={{fontSize:"1.5rem"}}></span>
          </button>
        <div className="collapse navbar-collapse flex-grow-0" id="collapseNav">
            <div className="navbar-nav">
                
                <Link to="/blog" className="nav-item nav-link text-primary h5 mx-1 my-auto">
                 Blog
                    </Link>
                    <a href="/" className="nav-item nav-link text-primary h5 mx-1 my-auto">
                   Work
                    </a>
                    
                    </div>
        </div>
    </nav>
    );
}
export default Navbar;

