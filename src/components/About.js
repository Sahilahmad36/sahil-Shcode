import React from "react";
import {Link} from "react-router-dom";
import Card from "../asset/Card1.jpg";
  function About(){
    return(
        <section id="about">
        <div className="container mt-4 pt-4">
            <h1 className="text-center text-success" style={{fontSize:"4rem"}}>About Us</h1>
            <div className="row mt-4">
                <div className="col-lg-4">
                    <img 
                    src={Card} className= "img-fluid" 
                    alt=" " 
                    />
                </div>
    
                <div className="col-lg-8">
                    <p style={{fontFamily:"serif"}}> 
                    I've done them all together with amazing people from companies around the globe. 
                    It's only a drop in the ocean compared to the entire list.<br />
                    I currently work remotely with a selected freelance client base being open 
                        for new opportunities.
                    <br />
                    Full -stack developer with expertise in java using Spring Boot,RESTful API, Mockito unit testing, SQL, Apache Kafla, and
                                Cassandra CQL. Day-to-day involves creating modular and scalable microservice system for data centers and service centers
                                across the country.
                                 <br />
                                 Programming Languages: Java, Python, Bash.
                                <br />
                                Back End: Spring Framework, Oracle DB, Cassandra, Kafla, Kubernetes.
                                <br />
                                Front End: React, HTML, CSS, JavaScript.
                                
                    </p>
                    <Link to="/content" className="text-danger">Content <i className="fa fa-angle-double-down"></i></Link>
                    
                </div>
            </div>
            </div>
    </section>
    );
  }
  export default About;