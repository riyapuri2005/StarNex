import {Link, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from 'react';
import Cookies from 'js-cookie';
import addCSS from "../common_elements/AddCSS";
import addJS from "../common_elements/AddJS";
import ClearAllScripts from "../common_elements/ClearAllScripts";


function Signup() {


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();


    // Show error message and add red border
    function showError(input, errorElement, message) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
        if (input !== null) input.classList.add('error-border');
    }

    // Clear error message and remove red border
    function clearError(input, errorElement) {
        errorElement.style.display = 'none';
        if (input !== null) input.classList.remove('error-border');
    }


    const handleRegister = async (e) => {
        e.preventDefault();

        let isValid = true;

        const nameInput = document.getElementById('nameInput');
        const usernameInput = document.getElementById('usernameInput');
        const emailInput = document.getElementById('emailInput');
        const passwordInput = document.getElementById('passwordInput');
        const confirmPasswordInput = document.getElementById('confirmPassword');

        const nameError = document.getElementById('nameError');
        const usernameError = document.getElementById('usernameError');
        const emailError = document.getElementById('emailError');
        const passwordError = document.getElementById('passwordError');
        const confirmPasswordError = document.getElementById('confirmPasswordError');
        const serverError = document.getElementById('serverError');


        if (name.trim() === '') {
            showError(nameInput, nameError, 'Name is required');
            isValid = false;
        } else {
            clearError(nameInput, nameError);
            clearError(null, serverError);
        }

        if (username.trim() === '') {
            showError(usernameInput, usernameError, 'Username is required');
            isValid = false;
        } else {
            clearError(usernameInput, usernameError);
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.trim())) {
            showError(emailInput, emailError, 'Enter a valid email address');
            isValid = false;
        } else {
            clearError(emailInput, emailError);
        }

        if (password.trim().length < 8) {
            showError(passwordInput, passwordError, 'Password must be at least 8 characters');
            isValid = false;
        } else {
            clearError(passwordInput, passwordError);
        }

        if (password !== confPassword) {
            showError(confirmPasswordInput, confirmPasswordError, 'Passwords do not match');
            isValid = false;
        } else {
            clearError(confirmPasswordInput, confirmPasswordError);
        }

        if (isValid) {
            try {
                const response = await fetch('http://localhost:5000/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({"NAME": name, "EMAIL": email, "UNAME": username, "PASSWORD": password}),
                });
                const result = await response.json();
                if (result["STATUS"] >= 0) {
                    Cookies.set('BEARER', result["BEARER"], {expires: 30});
                    navigate("/home");
                } else {
                    showError(null, serverError, result["REASON"]);
                }
            } catch (error) {
                showError(null, serverError, "Unable to connect to API");
            }
        }
    };


    useEffect(() => {
        Cookies.remove('BEARER');
        ClearAllScripts();
        addJS("/js/signup.js");
        addCSS("/css/auth.css");
        addCSS("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css");
        addCSS("https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css");
        for(let i=0; i<=271;i++) { document.getElementById("spanGenerate").appendChild(document.createElement("span")) }
    });


    return (
        <div className="Signup">
            <section id="spanGenerate"></section>
            <div className="flexbox">
                <div className="container">
                    <header>Sign Up Form</header>
                    <form id="signupForm" noValidate onSubmit={handleRegister}>
                        <span className="error" id="serverError"></span>
                        <div className="field name-field">
                            <div className="input-field">
                                <input type="text" placeholder="Enter your Name" className="name" id="nameInput"
                                       onChange={(e) => setName(e.target.value)}/>
                                <span className="error" id="nameError"></span>
                            </div>
                        </div>
                        <div className="field username-field">
                            <div className="input-field">
                                <input type="text" placeholder="Enter your Username" className="username"
                                       id="usernameInput"
                                       onChange={(e) => setUsername(e.target.value)}/>
                                <span className="error" id="usernameError"></span>
                            </div>
                        </div>
                        <div className="field email-field">
                            <div className="input-field">
                                <input type="email" placeholder="Enter your email" className="email" id="emailInput"
                                       onChange={(e) => setEmail(e.target.value)}/>
                                <span className="error" id="emailError"></span>
                            </div>
                        </div>
                        <div className="field create-password">
                            <div className="input-field">
                                <input type="password" placeholder="Password" className="password" id="passwordInput"
                                       onChange={(e) => setPassword(e.target.value)}/>
                                <i id="peye" className="bx bx-hide show-hide" onClick={() => {
                                    const inputField = document.getElementById("passwordInput");
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
                                <span className="error" id="passwordError"></span>
                            </div>
                        </div>
                        <div className="field confirm-password">
                            <div className="input-field">
                                <input type="password" placeholder="Confirm Password" className="confirmPassword"
                                       id="confirmPasswordInput" onChange={(e) => setConfPassword(e.target.value)}/>
                                <i id="cpeye" className="bx bx-hide show-hide" onClick={() => {
                                    const inputField = document.getElementById("confirmPasswordInput");
                                    const eye = document.getElementById("cpeye");
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
                                <span className="error" id="confirmPasswordError"></span>
                            </div>
                        </div>
                        <div className="links">
                            <Link to="https://gmail.com/">Forgot Password</Link>
                            <Link to="/login">Login</Link>
                        </div>
                        <div className="input-field button">
                            <input type="submit" value="Signup Now"/>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default Signup;
