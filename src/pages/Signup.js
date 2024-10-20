import {Link} from "react-router-dom";
import React, { useEffect } from 'react';


function Signup() {
    useEffect(() => {
        for(let i=0; i<=271;i++) { document.getElementById("spanGenerate").appendChild(document.createElement("span")) }
    }, []);  // Empty dependency array ensures the effect runs only once, on page load


    const toggleVisibility = (icon) => {
        const inputField = icon.previousElementSibling;
        if (inputField.type === "password") {
            inputField.type = "text";
            icon.classList.remove("bx-hide");
            icon.classList.add("bx-show");
        } else {
            inputField.type = "password";
            icon.classList.remove("bx-show");
            icon.classList.add("bx-hide");
        }
    };

    return (
        <div className="Signup">


            <link rel='stylesheet' href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css'/>
            <link rel="stylesheet" href="/css/auth.css"/>
            <section id="spanGenerate"></section>


            <div className="container">
                <header>Sign Up Form</header>
                <form id="signupForm" noValidate>
                    <div className="field name-field">
                        <div className="input-field">
                            <input type="text" placeholder="Enter your Name" className="name" id="name"/>
                            <span className="error" id="nameError"></span>
                        </div>
                    </div>
                    <div className="field username-field">
                        <div className="input-field">
                            <input type="text" placeholder="Enter your Username" className="username" id="username"/>
                            <span className="error" id="usernameError"></span>
                        </div>
                    </div>
                    <div className="field email-field">
                        <div className="input-field">
                            <input type="email" placeholder="Enter your email" className="email" id="email"/>
                            <span className="error" id="emailError"></span>
                        </div>
                    </div>
                    <div className="field create-password">
                        <div className="input-field">
                            <input type="password" placeholder="Password" className="password" id="password"/>
                            <i className="bx bx-hide show-hide" onClick={() => toggleVisibility}></i>
                            <span className="error" id="passwordError"></span>
                        </div>
                    </div>
                    <div className="field confirm-password">
                        <div className="input-field">
                            <input type="password" placeholder="Confirm Password" className="cPassword" id="confirmPassword"/>
                            <i onClick={() => toggleVisibility} className="bx bx-hide show-hide"></i>
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

            <script src="/js/signup.js"></script>


        </div>
    );
}

export default Signup;
