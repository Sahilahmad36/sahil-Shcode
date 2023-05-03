import React from "react";
import Child from "./Child";
import "./SkillBar.css";
import items from "./skillbaricons";

function SkillBar() {
  return (
    
    <div className="container1 my-5 col-11 col-md-6">
     
        {items.map((item)=>{
        return (<Child
           key={item.id}
           icon={item.icon}
           skill={item.skill}
           percentage={item.percentage}
           
          
        />
        )
        })}
   
    </div>
    
    
    
     
  );
}
export default SkillBar;