import React from "react";
import './contact-each.css';

import AshleighPic from '../images/AshleighPic.png';
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaPhone } from "react-icons/fa"
import { FaEnvelope } from "react-icons/fa"


const AshContact = () => {
  return (
    <div className="text-center">
      <div className="bio-pic">
        <img
          src={AshleighPic}
          class="selfie"
          alt="picture"
        />
        <div className="bio">
          <p>
            <span class="first-letter">A</span>shleigh has made a career of always building. In the past she worked with zero energy and green friendly design firms to bring physical construction on par with the technologies and methods now available. She has shifted her focus, and now builds in a new way as a web developer. She brings her passion for solving problems and designing and creating new projects, from concept to reality.
        </p>
          <p>Currently located in Philadelphia, you can find Ashleigh living with her faithful blue nose pittie. She is driven by an insatiable curiousity that requires a constant stream of learning. When not working she is honing her skills, working out, cooking new dishes, and exploring both in the city and out.</p>
          <div className="fa-icons">
            <div className="contact-icon">
              <a className="contact-icons" href="https://github.com/ARFreiler"><FaGithub size={35} /></a>
            </div>
            <div className="contact-icon">
              <a className="contact-icons" href="https://linkedin.com/in/ashleighfreiler"><FaLinkedin size={35} /></a>
            </div>
            <div className="contact-icon">
              <a className="contact-icons" href="+12673687744"><FaPhone size={35} /></a>
            </div>
            <div className="contact-icon">
              <a className="contact-icons" href="mailto:roseashtech@gmail.com"><FaEnvelope size={35} /></a>
            </div>
          </div>
        </div>
      </div>

    </div>

  );
};

export default AshContact;