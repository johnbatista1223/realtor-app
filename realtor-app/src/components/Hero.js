import React from 'react';
import '../styles/hero.css';




function Hero() {
  return (

    <div class="container">
      <div class="login">
        <div class="tab">
          <button class="tablinks" onclick="">Login</button>
          <button class="tablinks" onclick="">Register</button>
        </div>
        <div class="signin">
          <div class="inputs">
            <p>Username</p>
            <input id="username" type="text" />
            <p>Password</p>
            <input id="password" type="text" />
          </div>
          <button id="submit" type="submit">Submit</button>
          <a href="" id="recover">Forgot your password?</a>
        </div>

    <div className="hero hero-lg mb-3">
      <div className="hero-body text-center text-light">
        <h1>There's No Place Like Home</h1>

      </div>
    </div>
  )
}

export default Hero