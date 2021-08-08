import React from 'react';
import './register.css';
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
                        <input id="username" type="text" placeholder=" Type your username here..." />
                        <p>Email</p>
                        <input id="email" type="text" placeholder=" Type your email here..." />
                        <p>Password</p>
                        <input id="password" type="password" placeholder=" Type your password here..." />
                        <p>Confirm Password</p>
                        <input id="confirm-password" type="password" placeholder=" Confirm your password here..." />
                    </div>
                    <div class="reg-button">
                        <a href="/Profile">
                            <button id="register-submit" type="submit">Submit</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RegisterUser