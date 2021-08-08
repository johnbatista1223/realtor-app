import React from "react";
import AshleighPic from '../images/AshleighPic.png';


const AshContact = () => {
  return (
    <div className="text-center">
      <h2>Contact Information</h2>
      <hr class="solid bg-dark" />
      <img
        style={{ height: "250px" }}
        src={AshleighPic}
        class="selfie"
        alt="picture"
      />
      <p>
        <span class="first-letter">A</span>shleigh has made a career of always building. In the past she worked with zero energy and green friendly design firms to bring physical construction on par with the technologies and methods now available. She has shifted her focus, and now builds in a new way as a web developer. She brings her passion for solving problems and designing and creating new projects, from concept to reality.
        </p>
      <p>Currently located in Philadelphia, you can find Ashleigh living with her faithful blue nose pittie. She is driven by an insatiable curiousity that requires a constant stream of learning. When not working she is honing her skills, working out, cooking new dishes, and exploring both in the city and out.</p>
      <hr className="" />
      <h3>Cell Phone</h3>
      <hr className="hr-dark w-25" />
      <a href="tel:267-368-7744">
        <div icon="phone-alt" /> 267-368-7744
          </a>
      <hr className="" />
      <h3>E-mail</h3>
      <hr className="" />
      <a href="mailto:roseashtech@gmail.com">
        <div icon="envelope" /> roseashtech@gmail.com
          </a>
    </div>

  );
};

export default AshContact;