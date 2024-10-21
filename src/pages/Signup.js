import {Link} from "react-router-dom";
import React, {useEffect, useState} from 'react';
import Cookies from 'js-cookie';


function Signup() {


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');


    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({"NAME":name, "EMAIL":email, "UNAME":username, "PASSWORD":password}),
            });

            const result = await response.json();
            if (result["STATUS"]>=0) {
                console.log(result["BEARER"])
                Cookies.set('BEARER', result["BEARER"], { expires: 30 });
            } else {
                console.error('Signup failed:', result["REASON"]);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };


    useEffect(() => {
        Cookies.remove('BEARER');

        const link1 = document.createElement('link');
        link1.rel = "stylesheet";
        link1.href = "/css/auth.css";
        const existingLink1 = document.querySelector('link[href="/css/auth.css"]');
        if (!existingLink1) { document.head.appendChild(link1); }


        const link2 = document.createElement('link');
        link2.rel = "stylesheet";
        link2.href = "https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css";
        const existingLink2 = document.querySelector('link[href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css"]');
        if (!existingLink2) { document.head.appendChild(link2); }


        for(let i=0; i<=271;i++) { document.getElementById("spanGenerate").appendChild(document.createElement("span")) }
    }, []);  // Empty dependency array ensures the effect runs only once, on page load


    return (
        <div className="Signup">

            <script src="/js/signup.js"></script>

            <section id="spanGenerate"></section>

            <div className="container">
                <header>Sign Up Form</header>
                <form id="signupForm" noValidate onSubmit={handleRegister}>
                    <div className="field name-field">
                        <div className="input-field">
                            <input type="text" placeholder="Enter your Name" className="name" id="name" onChange={(e) => setName(e.target.value)}/>
                            <span className="error" id="nameError"></span>
                        </div>
                    </div>
                    <div className="field username-field">
                        <div className="input-field">
                            <input type="text" placeholder="Enter your Username" className="username" id="username" onChange={(e) => setUsername(e.target.value)}/>
                            <span className="error" id="usernameError"></span>
                        </div>
                    </div>
                    <div className="field email-field">
                        <div className="input-field">
                            <input type="email" placeholder="Enter your email" className="email" id="email" onChange={(e) => setEmail(e.target.value)}/>
                            <span className="error" id="emailError"></span>
                        </div>
                    </div>
                    <div className="field create-password">
                        <div className="input-field">
                            <input type="password" placeholder="Password" className="password" id="password" onChange={(e) => setPassword(e.target.value)}/>
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
                            <input type="password" placeholder="Confirm Password" className="cPassword" id="confirmPassword"/>
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
