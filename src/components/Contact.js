// import React, { Component} from "react";
// class Contact extends Component {


//   constructor(){
//     super();
//     this.state={
//         name:"",
//         email:"",
//         description:"",
//         submitMessage:"",
//         submitMessageTextColor:"",
//     };

//   }
//     onChange=(event)=>{
//    this.setState({
//       [event.target.name]:event.target.value,
//       });
      
//     };
//        onSubmit=(event)=>{
//         event.preventDefault();
//          let isSuccessful=true;
//          const {name}=this.state;

//          if(isSuccessful){
          
//           this.setState({
//        submitMessage: `Thank you ${name}. I will contact you soon!`,
//        submitMessageTextColor:"text-success",
//           });
//          }else{
//           this.setState({
//             submitMessage:"Oops! Something went wrong. Please try again later :",
//             submitMessageTextColor: "text-danger",
//           });
//          }
//        };
//   render(){
//     const {submitMessageTextColor, submitMessage}=this.state;
//   return (
//     <div className="container my-5">
//       <h1 className=" font-weight-light text-center py-5">
//        <span className="text-info" style={{fontSize:"40px"}}>Let's talk about Coding</span>
//        <br />
//        <h2 className="contact">
//        @ Contact
//        </h2>
//       </h1>
//       <div className="row justify-content-center">
//        <div className="col-12 col-lg-5">
//         <form onSubmit={this.onSubmit}>
//        <div className="form-group">
        
//         <label htmlFor="name">Name*</label>
//         <input type="text" name="name" className="form-control" 
//         onChange={this.onChange}
//         />
//        </div>
//        <div className="form-group">
//        <label htmlFor="email">Email*</label>
//        <input type="email" name="email" className="form-control" 
//        onChange={this.onChange}
//        />
//        </div>
//        <div className="form-group">
//         <label htmlFor="description">Your Message*</label>
//         <textarea className="form-control"
//            name="description"
//            rows="5"
//            onChange={this.onChange}
//         >

//         </textarea>
//        </div>
//        <button
//        type="submit"
//        className="btn btn-outline-info float-right"
//        >
//          Submit
//         </button>
//        </form>
//        </div>
       

//        </div>
//        <div className="py-5 mx-2 text-center">
//    <h5 className={submitMessageTextColor}>{submitMessage}</h5>
//        </div>
//       </div>
      
  
//   );
// }
// }

// export default Contact;



import React, { useRef } from "react";
import emailjs from "@emailjs/browser";


const Contact = () => {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o8zzdo8",
        "template_f0d2dpr",
        form.current,
        "PYA_yS4jPAOATo99l"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset()
      }
    
  return (
    <div className="container my-5">
     <h1 className=" font-weight-light text-center py-5">
            <span className="text-info" style={{fontSize:"40px"}}>Let's talk about Coding</span>
        <br />
       <h2 className="contact">
               @ Contact
       </h2>
      </h1>
      <div className="row justify-content-center">
       <div className="col-12 col-lg-5">
      <form  ref={form} onSubmit={sendEmail} >
       <div className="form-group">
        
        <label htmlFor="name">Name*</label>
        <input type="text" name="to_name" className="form-control" 
     
        />
       </div>
       <div className="form-group">
       <label htmlFor="email">Email*</label>
       <input type="email" name="email" className="form-control" 
   
       />
       </div>
       <div className="form-group">
        <label htmlFor="description">Your Message*</label>
        <textarea className="form-control"
           name="message"
           rows="5"
          
        >

        </textarea>
       </div>
       <button
       type="submit"
       className="btn btn-outline-primary float-right"
       >
         Submit
        </button>
       </form>
       </div>
       </div>
       </div>
    
  );
}



export default Contact;

