import {Link} from "react-router-dom";


function Home() {
  return (
      <div className="Home">
          <nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm navbar-expand-xs fixed-top">
              <div className="container-fluid ">
                  <Link className="navbar-brand" to="#">
                      <img src="/image/textLogo.png" alt="Logo" width="auto" height="24" className="d-inline-block align-text-top"/>
                  </Link>
                  <div className="navbar-nav ms-auto d-flex align-items-center" id="navbarSupportedContent">
                      <Link className="nav-link" to="#">
                          <img src="/image/notification.png" id="notifications" alt="Notifications" width="auto" height="30"/>
                      </Link>
                      <Link className="nav-link" to="#">
                          <img src="/image/friend.png" id="friends" alt="Friends" width="auto" height="28"/>
                      </Link>
                      <Link className="nav-link" to="#">
                          <img src="/image/Premium.png" id="Premium" alt="Premium" width="auto" height="35"/>
                      </Link>
                      <Link className="nav-link" to="./SignIn.html">
                          <img src="/image/SignIn.png" id="SignIn" alt="Sign In" width="auto" height="35"/>
                      </Link>
                  </div>
              </div>
          </nav>


          <section>
              <img src="/image/background.png" style={{height: '130%', width: '100%'}} id="background" className="parallax"/>
              <img src="/image/stars.png" style={{opacity: '70%'}} id="stars"/>
              <img src="/image/3Front.png" style={{height: '100%', width: '100%'}} id="mountains_behind" className="parallax"/>
              <img src="/image/2Front.png" style={{height: '100%', width: '100%'}} id="mountains_front" className="parallax"/>
              <h6 id="text2" className="LevelUp"> LEVEL UP </h6>
              <h2 id="text1" className="TheStars"> THE STARS </h2>
              <Link to="/game" id="btn" target="_blank" style={{textAlign: 'center'}}> PLAY NOW </Link>
              <img src="/image/1Front.png" style={{height: '100%', width: '100%'}} id="mountains_front" className="parallax"/>
          </section>



      </div>
  );
}

export default Home;
