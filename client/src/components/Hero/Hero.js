import React, { useState, useContext } from 'react';
import './hero.css';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import { useHistory } from 'react-router-dom'
import Auth from '../../utils/auth';
import { UserContext } from '../../context/UserProvider';

function Hero() {

  const [login, { error, data }] = useMutation(LOGIN_USER);
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [isError, setIsError] = useState(false)

  let history = useHistory()

  const { updateToken } = useContext(UserContext)

  return (
    <div className="hero-container-outer">
       <div class="hero-container">
        <div class="login">
          <div class="title">
            <h1>Login to HomePage</h1>
          </div>
          <div class="signin">
            <form>
              <div class="inputs username-title">
                <p>Username</p>
                <input
                  id="username"
                  className="input-size"
                  type="text"
                  placeholder=" Type your username here..."
                  value={username}
                  onChange={(e) => {

                    setUsername(e.target.value)

                  }} />
                <p>Password</p>
                <input
                  id="password"
                  type="password"
                  placeholder=" Type your password here..."
                  onChange={(e) => { setPassword(e.target.value) }}
                  value={password}
                />
              </div>
              <a href="" id="recover">Forgot your password?</a>
              <div id="login-button">

                <button id="submit" type="submit" onClick={async (e) => {
                  e.preventDefault()
                  try {
                    const { data } = await login({
                      variables: { username: username, password: password }
                    })
                    console.log(data)
                    Auth.login(data.login.token);
                    updateToken()
                    history.push('/homes')
                  } catch (e) {
                    setIsError(true)
                    setErrorMessage("You entered an incorrect username or password")
                  }

                }}>Submit</button>

                {isError && <div style={{ backgroundColor: "red", color: "black", padding: "10px", marginTop: "10px", display: "flex", "justifyContent": "center", "alignItems": "center" }}>{errorMessage}</div>}
              </div>
            </form>
            <div id="register">
              <h3>Or create an account</h3>



              <a href="/Register">
                <button id="create-account" type="submit">Register</button></a>

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Hero