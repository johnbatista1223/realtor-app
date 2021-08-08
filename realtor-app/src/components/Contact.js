import React from "react";
import '../styles/contact.css';

import JohnsContact from './JohnContact';
import AmyContact from './AmyContact';
import AshContact from './AshContact';
import QuanContact from './QuanContact';


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
    </div>
  )

};

export default Contact;