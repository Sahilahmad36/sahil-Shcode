import React from "react";
import Sahil from "../asset/Sahil-sitaishi1.jpg";
// import logo from "../asset/logo.png";
// import "./font.css";
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
        
           
            <div className="font-weight-light" style={{fontSize:"60px"}}>
                H'i I'm <h1 className="text-info">Sahil</h1> 
           </div>
           
           <h4 className="font-weight-light">
            FULL STACK DEVELOPER</h4>
            
            
       </div>
       </div>  
       </div>


    
    );
}
export default Title;
