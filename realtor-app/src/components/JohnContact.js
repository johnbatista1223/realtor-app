import React from "react";
import JohnsPic from '../images/john.jpg';



const JohnContact = () => {
  return (
   <div className="text-center">
          <h2>Contact Information</h2>
          <hr class="" />
          <img
            style={{ height: "200px" }}
            src={JohnsPic}
            class=""
            alt="picture"
          />
          <h4>
            hello my name is john batisa 
          </h4>
          <hr className="" />
          <h3>Cell Phone</h3>
          <hr className="" />
          <a href="609-289-6244">
            <div icon="phone-alt" /> 609-289-6244
          </a>
          <hr className="" />
          <h3>E-mail</h3>
          <hr className="" />
          <a href="mailto:batistaj651@gmail.com">
            <div icon="envelope" /> batistaj651@gmail.com
          </a>
       </div>
         
      
      
  );
};

export default JohnContact;