import React from "react";


const AshContact = () => {
  return (
   <div className="text-center">
          <h2>Contact Information</h2>
          <hr class="solid bg-dark" />
          <img
            style={{ height: "250px" }}
            src=""
            class=""
            alt="picture"
          />
          <h4>
            bio
          </h4>
          <hr className="" />
          <h3>Cell Phone</h3>
          <hr className="hr-dark w-25" />
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

export default AshContact;