import React from "react";
import '../styles/contact-each.css';

import Headshot from '../images/Headshot.jpg';
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaPhone } from "react-icons/fa"
import { FaEnvelope } from "react-icons/fa"

const AmyContact = () => {
  return (
    <div className="text-center">
      <div className="bio-pic">
        <img
          src={Headshot}
          class="selfie"
          alt="picture"
        />
        <div className="bio">
          <p>
            <span class="first-letter">H</span>ello, my name is Amy Smerlick, a current student of University of Pennsylvania Full Stack Coding Bootcampt. I reside in Central Pennsylvania, where I own and operate a nursing business, and practice Real Estate in my free time. I am
                excited to refine my skills with the right company and look forward to growing in this field.</p>
          <div className="fa-icons">
            <div className="contact-icon">
              <a className="contact-icons" href="https://github.com/"><FaGithub size={30} /></a>
            </div>
            <div className="contact-icon">
              <a className="contact-icons" href="https://linkedin.com/in/"><FaLinkedin size={30} /></a>
            </div>
            <div className="contact-icon">
              <a className="contact-icons" href="+1"><FaPhone size={25} /></a>
            </div>
            <div className="contact-icon">
              <a className="contact-icons" href="mailto:"><FaEnvelope size={30} /></a>
            </div>
          </div>
        </div>
      </div>

    </div>

  );
};

export default AmyContact;