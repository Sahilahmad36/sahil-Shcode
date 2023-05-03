import React from "react";
import {Link} from "react-router-dom";
function Navbar(){
    return (
        <nav className=" navbar navbar-expand-md fixed-top bg-white">
        
            <a href="/" className="btn btn-outline-info">Home</a>
            <Link to="/contact" className="ml-auto mx-3">
             <button className="btn btn-outline-info">Contact me</button>
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
                    Project
                    </a>
                    
                    </div>
        </div>
           
        
    
    </nav>
    );
}
export default Navbar;