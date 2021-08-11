import React, { useState } from 'react';
import './register.css';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../../utils/mutations';
import { useHistory } from 'react-router-dom'
import Auth from '../../utils/auth';

  
const RegisterUser = (props) => {

    const [create, { error, data }] = useMutation(CREATE_USER);

    let history = useHistory()

    const [email, setEmail] = useState("")
    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")
    const [pwConfirm, setPWConfirm ] = useState("")

    return (
        <div className="registration-container-outer">
        <div className="registration">
            <div class="register">
                <div class="title">
                    <h1>Register with HomePage</h1>
                </div>
                <div class="info">
                        <form class="inputs">
                            <p>Username</p>
                            <input id="username" type="text" placeholder=" Type your username here..." name='username' value={username} onChange={(e) => {

                                setUsername(e.target.value)

                            }} />
                            <p>Email</p>
                            <input id="email" type="text" placeholder=" Type your email here..." name='email' value={email} onChange={(e) => {
                                setEmail(e.target.value)

                            }} />
                            <p>Password</p>
                            <input id="password" type="password" placeholder=" Type your password here..." name='password' value={password} onChange={(e) => {

                                setPassword(e.target.value)
                            }} />
                            <p>Confirm Password</p>
                            <input id="confirm-password" type="password" placeholder=" Confirm your password here..." value={pwConfirm} onChange={(e) => {

                                setPWConfirm(e.target.value)

                            }} />
                        </form>
                    <div class="reg-button">
                            <button id="register-submit" type="submit" onClick={async (e) => {

                                e.preventDefault()

                                console.log(username, email, password, pwConfirm)
                                if (username.length === 0 || email.length === 0 || password.length === 0 || pwConfirm.length === 0) {

                                    console.log("One or more fields were left blank")
                                } else {

                                    if (password !== pwConfirm) {

                                        console.log("The password you entered do not match")
                                    } else {

                                            

                                    try {
                                        console.log({ email: email, username: username, password: password })
                                        const { data } = await create({
                                            variables: { email: email, username: username, password: password }
                                            });
                                            console.log(data)
                                        
                                        history.push("/")
                                      } catch (e) {
                                          console.log("ERROR")
                                        console.error(e);
                                      }

                            

                                    }
                                }

                                

                                }}> Submit</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
export default RegisterUser