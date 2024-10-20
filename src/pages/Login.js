import React, {useEffect} from "react";


function Login() {

    useEffect(() => {
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
      <div className="Login">

          <section id="spanGenerate"></section>

          <div className="container">
              <header>Sign In Form</header>
              <form id="loginForm" noValidate>
                  <div className="field email-field">
                      <div className="input-field">
                          <input type="email" placeholder="Enter your email" id="email"/>
                          <span className="error" id="emailError">Please enter a valid email</span>
                      </div>
                  </div>

                  <div className="field create-password">
                      <div className="input-field">
                          <input type="password" placeholder="Password" id="password"/>
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

                  <div className="field confirm-password">
                      <div className="input-field">
                          <input type="password" placeholder="Confirm Password" id="confirmPassword"/>
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
                          <span className="error" id="confirmPasswordError">Passwords do not match</span>
                      </div>
                  </div>

                  <div className="links">
                      <a href="https://gmail.com/">Forgot Password</a>
                      <a href="SignUp.html" target="_blank">Signup</a>
                  </div>

                  <div className="input-field button">
                      <input type="submit" value="Login Now"/>
                  </div>
              </form>
          </div>
      </div>
    );
}

export default Login;
