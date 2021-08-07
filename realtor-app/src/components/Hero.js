import React from 'react';
import '../styles/hero.css';




function Hero() {
  return (
    <div class="hero-container">

      <div class="login">
        <div class="title">
          <h2>Login to HomePage</h2>
        </div>
        <div class="signin">
          <div class="inputs">
            <p>Username</p>
            <input
              id="username"
              type="text"
              placeholder=" Type your username here..."
            />
            <p>Password</p>
            <input
              id="password"
              type="text"
              placeholder=" Type your password here..."
            />
          </div>
          <a href="" id="recover">Forgot your password?</a>
          <div id="login-button">
            <button id="submit" type="submit">Submit</button>
          </div>
          <div id="register">
            <h3>Or create an account</h3>
            <button id="register-submit" type="submit">Register</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero