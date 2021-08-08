import React from "react";
import Headshot from '../images/Headshot.jpg';
import '../styles/Contacts.css';

const AmyContact = () => {
    return (
        <div class="column team-container">
            <div class="card">
                <img src={Headshot} alt="Jane" style={{ height: "200px" }} />
                    <div class="container">
                        <h2>Jane Doe</h2>
                        <p class="title">CEO & Founder</p>
                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                        <p>jane@example.com</p>
                        <p><button class="button">Contact</button></p>
                    </div>
            </div>
            </div>
    );
};


export default AmyContact;