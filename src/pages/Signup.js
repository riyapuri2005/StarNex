import {Link, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from 'react';
import Cookies from 'js-cookie';
import addCSS from "../elements/AddCSS";


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
        input.classList.add('error-border');
    }

    // Clear error message and remove red border
    function clearError(input, errorElement) {
        errorElement.style.display = 'none';
        input.classList.remove('error-border');
    }


    const handleRegister = async (e) => {
        e.preventDefault();

        let isValid = true;

        const nameInput = document.getElementById('name');
        const usernameInput = document.getElementById('username');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const confirmPasswordInput = document.getElementById('confirmPassword');

        const nameError = document.getElementById('nameError');
        const usernameError = document.getElementById('usernameError');
        const emailError = document.getElementById('emailError');
        const passwordError = document.getElementById('passwordError');
        const confirmPasswordError = document.getElementById('confirmPasswordError');


        if (name.trim() === '') {
            showError(nameInput, 'Name is required');
            isValid = false;
        } else {
            clearError(nameInput, nameError);
        }

        if (username.trim() === '') {
            showError(usernameInput, 'Username is required');
            isValid = false;
        } else {
            clearError(usernameInput, usernameError);
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.trim())) {
            showError(emailInput, 'Enter a valid email address');
            isValid = false;
        } else {
            clearError(emailInput, emailError);
        }

        if (password.trim().length < 8) {
            showError(passwordInput, 'Password must be at least 8 characters');
            isValid = false;
        } else {
            clearError(passwordInput, passwordError);
        }

        if (password !== confPassword) {
            showError(confirmPasswordInput, 'Passwords do not match');
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
                    console.log(result["BEARER"])
                    Cookies.set('BEARER', result["BEARER"], {expires: 30});
                    navigate("/home");
                } else {
                    console.error('Signup failed:', result["REASON"]);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }
    };


    useEffect(() => {
        Cookies.remove('BEARER');
        addCSS("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css");
        addCSS("/css/auth.css");
        for(let i=0; i<=271;i++) { document.getElementById("spanGenerate").appendChild(document.createElement("span")) }
    }, []);


    return (
        <div className="Signup">

            <script src="/js/signup.js"></script>

            <section id="spanGenerate"></section>

            <div className="container">
                <header>Sign Up Form</header>
                <form id="signupForm" noValidate onSubmit={handleRegister}>
                    <span className="error" id="serverError"></span>
                    <div className="field name-field">
                        <div className="input-field">
                            <input type="text" placeholder="Enter your Name" className="name" id="name"
                                   onChange={(e) => setName(e.target.value)}/>
                            <span className="error" id="nameError"></span>
                        </div>
                    </div>
                    <div className="field username-field">
                        <div className="input-field">
                            <input type="text" placeholder="Enter your Username" className="username" id="username"
                                   onChange={(e) => setUsername(e.target.value)}/>
                            <span className="error" id="usernameError"></span>
                        </div>
                    </div>
                    <div className="field email-field">
                        <div className="input-field">
                            <input type="email" placeholder="Enter your email" className="email" id="email"
                                   onChange={(e) => setEmail(e.target.value)}/>
                            <span className="error" id="emailError"></span>
                        </div>
                    </div>
                    <div className="field create-password">
                        <div className="input-field">
                            <input type="password" placeholder="Password" className="password" id="password"
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
                            <span className="error" id="passwordError"></span>
                        </div>
                    </div>
                    <div className="field confirm-password">
                        <div className="input-field">
                            <input type="password" placeholder="Confirm Password" className="cPassword"
                                   id="confirmPassword" onChange={(e) => setConfPassword(e.target.value)}/>
                            <i id="cpeye" className="bx bx-hide show-hide" onClick={() => {
                                const inputField = document.getElementById("confirmPassword");
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
                        <Link to="/login" target="_blank">Login</Link>
                    </div>
                    <div className="input-field button">
                        <input type="submit" value="Signup Now"/>
                    </div>
                </form>
            </div>


        </div>
    );
}

export default Signup;
