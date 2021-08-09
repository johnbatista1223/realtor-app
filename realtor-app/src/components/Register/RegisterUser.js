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
                    <form class="inputs" method ="post" action ='/'>
                        <p>Username</p>
                        <input id="username" type="text" placeholder=" Type your username here..." name='username' />
                        <p>Email</p>
                        <input id="email" type="text" placeholder=" Type your email here..." name = 'email'/>
                        <p>Password</p>
                        <input id="password" type="password" placeholder=" Type your password here..." name = 'password'/>
                        <p>Confirm Password</p>
                        <input id="confirm-password" type="password" placeholder=" Confirm your password here..." />
                    </form>
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