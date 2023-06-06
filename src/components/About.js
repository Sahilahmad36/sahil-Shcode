import React, {Fragment, useState} from "react";
import "./About.css";
  function About(){
    const [toggleTab, setToggleTab]=useState(1)
    const toggleState= (index) =>{
      setToggleTab(index)
    }
 
    return(
        <Fragment>
        <section className="about">
         <div className="container mt-4 pt-4">
            <h1 className="text-center text-info" style={{fontSize:"3rem"}}>About Us</h1> 
           

<div className="row">
    <div className="column">
   <div className="about-img">

   </div>
    </div>
    <div className="column">
     <div className="tabs">

<div className={toggleTab === 1 ? "single-tabs active-tab": "single-tabs"}
onClick={() => toggleState(1)}
>
   <h2>About</h2>
</div>


<div className={toggleTab === 2 ? "single-tabs active-tab": "single-tabs"}
 onClick= {() => toggleState(2)}
>
   <h2>Skill</h2>
</div>

<div className={toggleTab === 3 ? "single-tabs active-tab": "single-tabs"}
 onClick= {() => toggleState(3)}
>
   <h2>Experience</h2>
</div>
</div>
    <div className="tab-content">


        <div className={toggleTab === 1?"content active-content":"content"} >
            <h2>My Story</h2>
            <p>
            I've done them all together with amazing people from companies around the globe. 
            It's only a drop in the ocean compared to the entire list.
            I currently work remotely with a selected 
             freelance client base 
             being open for new opportunities.</p>
            <h3>I Am Web Designer And Developer Having 2 Year of Experience</h3>
        </div>


        <div className={toggleTab === 2?"content active-content":"content"} >
            <h2>Skills</h2>
            <p>
            I've done them all together with amazing people from companies around the globe. 
            It's only a drop in the ocean compared to the entire list.
            I currently work remotely with a selected 
             freelance client base being open for new opportunities.</p>

         <div className="skills-row">
            <div className="progress-wrap">
                <h3>Developer</h3>
            <div className="progress">
          <div className="progress-bar">
         <span>80%</span>
          </div>
            </div>
            </div>
            </div>   

            <div className="skills-row">
            <div className="progress-wrap">
                <h3>Developer</h3>
            <div className="progress">
          <div className="progress-bar">
         <span>80%</span>
          </div>
            </div>
            </div>
            </div> 


            <div className="skills-row">
            <div className="progress-wrap">
                <h3>Developer</h3>
            <div className="progress">
          <div className="progress-bar">
         <span>80%</span>
          </div>
            </div>
            </div>
            </div> 


            <div className="skills-row">
            <div className="progress-wrap">
                <h3>Developer</h3>
            <div className="progress">
          <div className="progress-bar">
         <span>80%</span>
          </div>
            </div>
            </div>
            </div> 


    </div>



    <div className={toggleTab === 3?"content active-content":"content"} >
           <div className="exp-column">
   <h3>Web Developer</h3>

   <span>2014-2022</span>
   <p>Full -stack developer with expertise in java using Spring Boot,RESTful API, 
    Mockito unit testing, SQL, Apache Kafla,<br /> and Cassandra CQL. </p>
           </div>
       
           <div className="exp-column">
   <h3>Web Developer</h3>

   <span>2014-2022</span>
   <p>Full -stack developer with expertise in java using Spring Boot,RESTful API, 
    Mockito unit testing, SQL, Apache Kafla,<br /> and Cassandra CQL. </p>
           </div>


    </div>

    </div>
     
    </div>
    </div>




            </div>
    </section>
    </Fragment>
    );
  }
  export default About;