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

            <span class="first-letter">H</span>ey, my name is Raquan Stanley, and currently, I am a student in the University of Pennsylvania's Full Stack Coding Bootcamp. 
            I am a highly motivated person, who seeks to strive and succeed in all things that I pursue, especially as a coder. 
            Currently located in Allentown, PA, you can find me playing basketball and weightlifting in my freetime.
          

          </p>
          <div className="fa-icons">
            <div className="contact-icon">

              <a className="contact-icons" href="https://https://github.com/Quando24"><FaGithub size={35} /></a>
            </div>
            <div className="contact-icon">
              <a className="contact-icons" href="https://www.linkedin.com/in/raquan-stanley/"><FaLinkedin size={35} /></a>
            </div>
            <div className="contact-icon">
              <a className="contact-icons" href="+1"><FaPhone size={25} /></a>
            </div>
            <div className="contact-icon">
              <a className="contact-icons" href="mailto:stanley.raquan@gmail.com"><FaEnvelope size={35} /></a>

            </div>
          </div>
        </div>
      </div>

    </div>

  );
};

export default QuanContact;