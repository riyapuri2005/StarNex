

function Login() {
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
                          <i className="bx bx-hide show-hide" onClick="toggleVisible(this)"></i>
                          <span className="error" id="passwordError">Password must be at least 8 characters</span>
                      </div>
                  </div>

                  <div className="field confirm-password">
                      <div className="input-field">
                          <input type="password" placeholder="Confirm Password" id="confirmPassword"/>
                          <i className="bx bx-hide show-hide" onClick="toggleVisible(this)"></i>
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
