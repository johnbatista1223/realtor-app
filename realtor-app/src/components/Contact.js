import React from "react";
import JohnsContact from './JohnContact';
// import AmyContact from './AmyContact';
import AshContact from './AshContact';
import QuanContact from './QuanContact';
import AmyContact from './testcontacts';
import '../styles/Contacts.css';

const Contact = () => {
  return (
   <div>
  {/* <h2 style="text-align:center">Our Team</h2> */}

 <JohnsContact/>
 <br/>
 <AmyContact/>
 <br/>
 <AshContact/>
 <br/>
 <QuanContact/>
  </div>
          
  )
      
  
};

export default Contact;