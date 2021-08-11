import React from "react";
import './contact-each.css';

import JohnsPic from '../images/john.jpg';
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaPhone } from "react-icons/fa"
import { FaEnvelope } from "react-icons/fa"


const QuanContact = () => {
  return (
    <div className="text-center">
      <div className="bio-pic">
        <img
          src={JohnsPic}
          class="selfie"
          alt="picture"
        />
        <div className="bio">
          <p>
            <span class="first-letter">Y</span>our text here
        </p>
          <p>Currently located in Philadelphia, you can find Ashleigh living with her faithful blue nose pittie. She is driven by an insatiable curiousity that requires a constant stream of learning. When not working she is honing her skills, working out, cooking new dishes, and exploring both in the city and out.</p>
          <div className="fa-icons">
            <div className="contact-icon">
              <a className="contact-icons" href="https://github.com/"><FaGithub size={35} /></a>
            </div>
            <div className="contact-icon">
              <a className="contact-icons" href="https://linkedin.com/in/"><FaLinkedin size={35} /></a>
            </div>
            <div className="contact-icon">
              <a className="contact-icons" href="+1"><FaPhone size={35} /></a>
            </div>
            <div className="contact-icon">
              <a className="contact-icons" href="mailto:"><FaEnvelope size={35} /></a>
            </div>
          </div>
        </div>
      </div>

    </div>

  );
};

export default QuanContact;