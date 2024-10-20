import {Link} from "react-router-dom";


function Home() {
  return (
      <div className="Home">
          <header>
              <div id="menu-bar" className="fas fa-bars"></div>
              <nav className="navbar">
                  <Link to="/">Home</Link>
                  <Link to="/games">Games</Link>
                  <Link to="/feedback">Feedback</Link>
                  <Link to="/contact">Contact</Link>
              </nav>
          </header>
      </div>
  );
}

export default Home;
