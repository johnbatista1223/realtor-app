import React from 'react';
import '../styles/register.css';

const RegisterUser = () => {

    return (
        <div className="registration">
            <div class="register">
                <div class="title">
                    <h1>Register with HomePage</h1>
                </div>
                <div class="info">
                    <div class="inputs">
                        <p>Username</p>
                        <input id="username" type="text" />
                        <p>Email</p>
                        <input id="email" type="text" />
                        <p>Password</p>
                        <input id="password" type="text" />
                        <p>Confirm Password</p>
                        <input id="confirm-password" type="text" />
                    </div>
                    <div class="reg-button">
                        <button id="register-submit" type="submit">Submit</button>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default RegisterUser