import React from "react";
import Sahil from "../asset/Sahil-sitaishi1.jpg";
function Title(props){
    const{name,leadText}=props;
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

            
            <div className="font-weight-light" style={{ fontSize : "60px" }}>
                
                Hi I'm <span className="text-info" style={{fontSize:"3.5rem"}}>{name}</span>
            </div>
            <h4 className="font-weight-light">{leadText}</h4>
            
        </div>
        </div>
    </div>
    );
}
export default Title;