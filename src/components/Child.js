import React, { useEffect, useState } from "react";
// import {FaHtml5} from "react-icons/fa";
import "./Child.css";
const Child=({icon,skill,percentage})=> {
    const [style,setStyle]=useState()
    useEffect(()=>{
    
    setTimeout(()=>{
        const newStyle={
            opacity:1,
            width:`${percentage}`,
        }
        console.log(newStyle)
        setStyle(newStyle)
    },
        1000)
},[percentage])

  return (
   <div className="child"> 
<div className="content">
    <div className="left ">
        {icon}
        </div>
        <div className="right">
            <h3>{skill}</h3>
            <div className="skill-bar">
                <div className="progress" style={style}>
                    <span>{percentage}</span>
                </div> 
            </div>
        </div>
    
</div>
  </div>
  );
}
export default Child;