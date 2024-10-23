import React, {useEffect, useState} from "react";
import Cookies from "js-cookie";
import addCSS from "../elements/AddCSS";
import {useNavigate} from "react-router-dom";
import removeJS from "../elements/RemoveJS";
import removeCSS from "../elements/RemoveCSS";


function Login() {


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // Show error message and add red border
    function showError(input, errorElement, message) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
        input.classList.add('error-border');
    }

    // Clear error message and remove red border
    function clearError(input, errorElement) {
        errorElement.style.display = 'none';
        input.classList.remove('error-border');
    }

    const handleLogin = async (e) => {
        e.preventDefault();

        let isValid = true;

        const passwordInput = document.getElementById('password');
        const passwordError = document.getElementById('passwordError');
        const serverError = document.getElementById('serverError');


        if (password.trim().length < 8) {
            showError(passwordInput, passwordError, 'Password must be at least 8 characters');
            isValid = false;
        } else {
            clearError(passwordInput, passwordError);
        }

        if (isValid) {
            try {
                const response = await fetch('http://localhost:5000/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({"UNAME":username, "PASSWORD":password}),
                });
                const result = await response.json();
                if (result["STATUS"]>=0) {
                    Cookies.set('BEARER', result["BEARER"], { expires: 30 });
                    navigate("/home");
                } else {
                    showError(null, serverError, result["REASON"]);
                }
            } catch (error) {
                showError(null, serverError, "Unable to connect");
            }
        }
    };


    useEffect(() => {
        Cookies.remove('BEARER');
        removeCSS("/css/home.css");
        removeJS("/js/home.js");
        addCSS("/css/auth.css");
        addCSS("https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css");
        for(let i=0; i<=271;i++) { document.getElementById("spanGenerate").appendChild(document.createElement("span")) }
    }, []);


    return (
        <div className="Login">
            <section id="spanGenerate"></section>
            <div className="flexbox">
                <div className="container">
                    <header>Sign In Form</header>
                    <form id="loginForm" noValidate onSubmit={handleLogin}>
                        <span className="error" id="serverError"></span>
                        <div className="field email-field">
                            <div className="input-field">
                                <input type="username" placeholder="Username" id="username"
                                       onChange={(e) => setUsername(e.target.value)}/>
                                <span className="error" id="usernameError">Please enter a valid email</span>
                            </div>
                        </div>

                        <div className="field create-password">
                            <div className="input-field">
                                <input type="password" placeholder="Password" id="password"
                                       onChange={(e) => setPassword(e.target.value)}/>
                                <i id="peye" className="bx bx-hide show-hide" onClick={() => {
                                    const inputField = document.getElementById("password");
                                    const eye = document.getElementById("peye");
                                    if (inputField.type === "password") {
                                        inputField.type = "text";
                                        eye.classList.remove("bx-hide");
                                        eye.classList.add("bx-show");
                                    } else {
                                        inputField.type = "password";
                                        eye.classList.remove("bx-show");
                                        eye.classList.add("bx-hide");
                                    }
                                }
                                }></i>
                                <span className="error" id="passwordError">Password must be at least 8 characters</span>
                            </div>
                        </div>

                        <div className="links">
                            <a href="https://gmail.com/">Forgot Password</a>
                            <a href="/signup">Signup</a>
                        </div>

                        <div className="input-field button">
                            <input type="submit" value="Login Now"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
            );
            }

            export default Login;
