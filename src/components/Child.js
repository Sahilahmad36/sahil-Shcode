import React, { useEffect, useState } from "react";
import "./Child.css";
const Child = ({ icon, skill, percentage }) => {
  const [style, setStyle] = useState();
  useEffect(() => {
    setTimeout(() => {
      const newStyle = {
        opacity: 1,
        width: `${percentage}`,
      };
      console.log(newStyle);
      setStyle(newStyle);
    }, 1000);
  }, [percentage]);

  return (
    <div className="child">
      <div className="content-1">
        <div className="left ">{icon}</div>
        <div className="right">
          <h3>{skill}</h3>
          <div className="skill-bar">
            <div className="progress-1" style={style}>
              <span>{percentage}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Child;
