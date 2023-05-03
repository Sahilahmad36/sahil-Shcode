import React from "react";

function ProjectCard(props) {
    const {project}= props;
  return (
    <div className=" card shadow h-100">
        <img 
        className="card-img-top" 
        src={project.imageUrl}
        alt="title"
        /> 
      <div className="card-body">
        
<h4 className="card-title text-info">{project.title}</h4>
<p className="card-text text-info">{project.excerpt}</p>
{/* <a href="/" className="stretched-link" ></a> */}
      </div>
    </div>
  )
}
export default ProjectCard;