import React from "react";


const QuanContact = () => {
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
            Hey, my name is Raquan Stanley
          </h4>
          <hr className="" />
          <h3>Cell Phone</h3>
          <hr className="" />
          <a href="tel:609-289-6244">
            <div icon="phone-alt" /> 609-289-6244
          </a>
          <hr className="" />
          <h3>E-mail</h3>
          <hr className="" />
          <a href="mailto:batistaj651@gmail.com">
            <div icon="envelope" /> stanley.raquan@gmail.com
          </a>
       </div>
      
  );
};

export default QuanContact;