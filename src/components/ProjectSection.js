// import React from "react";
// import ProjectCard from "./ProjectCard";


//  function ProjectSection(){
//     const projects =[
//         {
//             id: 1,
//             title: "Project 1",
//             imageUrl:"https://cdn.pixabay.com/photo/2015/01/08/18/24/programming-593312_960_720.jpg",
//             excerpt: "This is my first project." ,
           
//         },
//         {
//             id: 2,
//             title: "Project 2",
//             imageUrl:"https://images.pexels.com/photos/7988087/pexels-photo-7988087.jpeg?auto=compress&cs=tinysrgb&w=600.jpg",
//             excerpt: "This is my second project." ,
//         },
//         {
//         id: 3,    
//         title: "Project 3",
//         imageUrl:"https://images.pexels.com/photos/4709289/pexels-photo-4709289.jpeg?auto=compress&cs=tinysrgb&w=600.jpg",
//         excerpt: "This is my third project." ,
//         },
//     ]
//     return(
//         <div className="container text-center my-5">
//        <h1 className="font-weight-light">
//         <span className="text-info" style={{fontSize:"40px"}}>Projects</span>
//        </h1>
//        <div className="lead">I build the products, Just like this..</div>
//        <div className="row my-5 pt-3"> 
//       {
//      projects.map((project)=>
//      (
//      <div key={project.id} className="col-12 col-md-4 my-2">
//      <ProjectCard project={project}
     
//      />
//      </div>
//      )
     
//      )
//       }
       
        
//         </div>
//         <div className="my-5">
//             <a href="/" className="text-dark text-right">
//                 <h5 className="text-danger">See my project
//          <i className="fas fa-arrow-right"></i></h5>
//          </a>
//         </div>
        
//         </div>
//     );
//  }
//  export default ProjectSection;
import React from "react";
import Website from "../asset/Website-3.jpg";
import Portfolio from "../asset/Portfolio-2.jpg";
import fotopoul from "../asset/fotopoul.jpg";
import {Link} from "react-router-dom";

 function ProjectSection(){
    return(
        <div className="container text-center my-5">
       <h1 className="font-weight-light">
        <span className="text-info" style={{fontSize:"40px"}}>Projects</span>
       </h1>
       <div className="lead">I build the projects, Just like this..</div>
       <div className="row my-5 pt-3">
        <div className="col-12 col-md-4 my-2 text-justify text-center">
           
            <div className="card shadow">
                <img className="card-img-top" src={Website}
                alt="Website-3"
                />
            
              <div className="card-body">
              <a href="https://sahilahmad36.github.io/Snapshot/">
           <h4 className="card-title text-primary btn btn-outline-secondary">Project 1</h4>  
           </a>
           <p className="text-primary" >This is my first project</p>              
            </div>
            </div>
        </div>
        <div className="col-12 col-md-4 my-2 text-justify text-center">
           
            <div className="card shadow">
                <img className="card-img-top" 
                src={Portfolio}
                alt="Portfolio-2"
                />
              
              <div className="card-body">
                <a href="/">
           <h4 className="card-title text-primary btn btn-outline-secondary">Project 2</h4> 
           </a> 
           <p className="text-primary text-center">This is my second project</p>
                       
            </div>
            </div>
        </div>
        <div className="col-12 col-md-4 my-2 text-justify text-center">
        
            <div className="card shadow">
                <img className="card-img-top" 
                src={fotopoul}
                alt="fotopoul"
                />
              
              <div className="card-body">
                <a href="/">
           <h4 className="card-title text-primary btn btn-outline-secondary">Project 3</h4> 
           </a> 
           <p className="text-primary text-center">This is my third project</p>   
                      
            </div>
            </div>
        </div>
        
       
        
        </div>
        <div className="text-center">
            <Link to="/picture">
                <h5 className="text-danger" style={{textAlign:"right"}}>CodePic's
         <i className="fas fa-arrow-right"></i></h5>
         </Link>
        </div>
        {/* <div className="my-5">
            <a href="/" className="text-dark text-right">
                <h5 className="text-danger">See my project
          <i className="fas fa-arrow-right"></i></h5>
         </a>
       </div> */}
        
        </div>
    );
 }
 export default ProjectSection;