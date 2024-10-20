import {Link} from "react-router-dom";


function Signup() {
  return (
      <div className="Signup">


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
                          <i className="bx bx-hide show-hide" onClick="toggleVisible(this)"></i>
                          <span className="error" id="passwordError"></span>
                      </div>
                  </div>
                  <div className="field confirm-password">
                      <div className="input-field">
                          <input type="password" placeholder="Confirm Password" className="cPassword" id="confirmPassword"/>
                          <i onClick="toggleVisible(this)" className="bx bx-hide show-hide"></i>
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
