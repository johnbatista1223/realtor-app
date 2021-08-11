import React from "react";
import './contact-each.css';

import RaquanPic from '../images/RaquanPic.jpg';
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaPhone } from "react-icons/fa"
import { FaEnvelope } from "react-icons/fa"


const QuanContact = () => {
  return (
    <div className="text-center">
      <div className="bio-pic">
        <img
          src={RaquanPic}
          class="selfie"
          alt="picture"
        />
        <div className="bio">
          <p>
            <span class="first-letter">Y</span>Hey, my name is Raquan Stanley, and currently, I am a student representing the University of Pennsylvania's Full Stack Coding Bootcamp!
        </p>
          <p>Currently located in Allentown,PA ,you can find Raquan living with her faithful blue nose pittie. She is driven by an insatiable curiousity that requires a constant stream of learning. When not working she is honing her skills, working out, cooking new dishes, and exploring both in the city and out.</p>
          <div className="fa-icons">
            <div className="contact-icon">

              <a className="contact-icons" href="https://https://github.com/Quando24"><FaGithub size={30} /></a>
            </div>
            <div className="contact-icon">
              <a className="contact-icons" href="https://www.linkedin.com/in/raquan-stanley/"><FaLinkedin size={30} /></a>
            </div>
            <div className="contact-icon">
              <a className="contact-icons" href="+1"><FaPhone size={35} /></a>
            </div>
            <div className="contact-icon">
              <a className="contact-icons" href="mailto:stanley.raquan@gmail.com"><FaEnvelope size={30} /></a>

            </div>
          </div>
        </div>
      </div>

    </div>

  );
};

export default QuanContact;