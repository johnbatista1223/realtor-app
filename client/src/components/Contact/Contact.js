import React from "react";
import './contact.css';

import JohnsContact from '../ContactEach/JohnContact';
import AmyContact from '../ContactEach/AmyContact';
import AshContact from '../ContactEach/AshContact';
import QuanContact from '../ContactEach/QuanContact';


const Contact = () => {
  return (
    <div>
      <h1 id="dev-team">Development Team</h1>
      <hr />
      <AmyContact />
      <hr />
      <AshContact />
      <hr />
      <JohnsContact />
      <hr />
      <QuanContact />
    </div >
  )

};

export default Contact;