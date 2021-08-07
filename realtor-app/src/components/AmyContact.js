import React from "react";


const AmyContact = () => {
  return (
   <div className="text-center">
          <h2>Contact Information</h2>
          <hr class="" />
          <img
            style={{ height: "250px" }}
            src=""
            class=""
            alt="picture"
          />
          <h4>
            bio
          </h4>
          <hr className="hr-light w-25" />
          <h3>Cell Phone</h3>
          <hr className="" />
          <a href="tel:609-289-6244">
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

export default AmyContact;