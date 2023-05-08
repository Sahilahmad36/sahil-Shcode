import React from "react";
import Sahil from "../asset/Sahil-sitaishi1.jpg";
import "./font.css";
function Title(){
    
    return(
        <div className="container">
            
        <div className="row text-center align-item-center" >
             <div className="col-12 col-md-4 py-5 my-3"> 
            <img
                 className="img-fluid rounded-circle img-center w-50"
                  src={Sahil}
                  alt="Sahil-sitaishi"
                  />
                
            </div>
            <div className="col-12 col-md-6 py-5 my-3">
            
             <div className="font-weight-light text-info" style={{ fontSize : "60px" }}>
                
                Hi I'm Sahil
            </div>
            <h4 className="font-weight-light">Full Stack Developer</h4>
            
        </div>
        </div>  
     </div>
    );
}
export default Title;