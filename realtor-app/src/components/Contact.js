import React from "react";
import JohnsContact from './JohnContact';
import AmyContact from './AmyContact';
import AshContact from './AshContact';
import QuanContact from './QuanContact';
import '../styles/Contacts.css';

const Contact = () => {
  return (
   <div>
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