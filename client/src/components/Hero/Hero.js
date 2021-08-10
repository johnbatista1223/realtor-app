import React from 'react';
import './hero.css';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../../utils/mutations';

function Hero() {

  const [create, { error, data }] = useMutation(CREATE_USER);

  return (
    <div className="hero-container-outer">
    <div class="hero-container">
      <div class="login">
        <div class="title">
          <h1>Login to HomePage</h1>
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
              type="password"
              placeholder=" Type your password here..."
            />
          </div>
          <a href="" id="recover">Forgot your password?</a>
          <div id="login-button">
            <a href="/Profile">
              <button id="submit" type="submit">Submit</button></a>
          </div>
          <div id="register">
            <h3>Or create an account</h3>



            <a href="/Register">
              <button id="create-account" type="submit">Register</button></a>

          </div>
        </div>
      </div>
    </div>
    <button onClick={async () => {

      const { data } = await create({
        variables: { email: "jdoe@test.com", username: "jdoe", password: "Test1234" }
      });

    }}>TEST</button>
    </div>
  )
}

export default Hero