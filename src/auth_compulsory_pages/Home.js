import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import addJS from "../common_elements/AddJS";
import addCSS from "../common_elements/AddCSS";

function Home(props) {
    const [playerName, setPlayerName] = useState("");
    const [playerScore, setPlayerScore] = useState(0);
    useEffect(() => {
        addCSS("/css/home.css");
        addJS("/js/home.js");
        setPlayerName(props.playerData.playerName)
        setPlayerScore(props.playerData.playerScore)
    }, [props.playerData]);


    return <div className="Home" style={{backgroundColor: "black"}}>
<nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm navbar-expand-xs fixed-top">
<div className="container-fluid ">
<Link className="navbar-brand" to="#">
<img src="/image/textLogo.png" alt="Logo" width="auto" height="24"
className="d-inline-block align-text-top"/>
</Link>
<div className="navbar-nav ms-auto d-flex align-items-center" id="navbarSupportedContent">
    <p className="usertext"> Hi @{playerName} </p>
    <p className="usertext"> Score : {playerScore} </p>
<Link className="nav-link" to="#">
<img src="/image/notification.png" id="notifications" alt="Notifications" width="auto"
height="30"/>
</Link>
<Link className="nav-link" to="#">
<img src="/image/friend.png" id="friends" alt="Friends" width="auto" height="28"/>
</Link>
<Link className="nav-link" to="#">
<img src="/image/Premium.png" id="Premium" alt="Premium" width="auto" height="35"/>
</Link>
<Link className="nav-link" to="/login">
<img src="/image/SignIn.png" id="SignIn" alt="Sign In" width="auto" height="35"/>
</Link>
</div>
</div>
</nav>


<section>
<img src="/image/background.png" style={{height: '130%', width: '100%'}} id="background"
className="parallax" alt=""/>
<img src="/image/stars.png" style={{opacity: '70%'}} id="stars" alt=""/>
<img src="/image/3Front.png" style={{height: '100%', width: '100%'}} id="mountains_behind"
className="parallax" alt=""/>
<img src="/image/2Front.png" style={{height: '100%', width: '100%'}} id="mountains_front"
className="parallax" alt=""/>
<h6 id="text2" className="LevelUp"> LEVEL UP </h6>
<h2 id="text1" className="TheStars"> THE STARS </h2>
<Link to="/discover" id="btn" style={{textAlign: 'center'}}> PLAY NOW </Link>
<img src="/image/1Front.png" style={{height: '100%', width: '100%'}} id="mountains_front"
className="parallax" alt=""/>
</section>

<img src="/image/2astronaut.png" id="astronaut" className="parallax right-bottom-image" alt=""/>

<div className="chatbot-icon">
<Link to="/iris" target={"_blank"}> <img src="/image/IRIS.png" alt="Chatbot"/> </Link>
</div>


<h1 style={{color: '#cdefff'}} className="text-glow"> ABOUT US </h1>


<p style={{color: '#ffffff', marginLeft: '20px'}} className="p-5">
Welcome to our gaming website, the ultimate destination where excitement and fun come together to create
unforgettable gaming experiences! We are passionate about bringing you a diverse collection of online
games designed to cater to all kinds of gamers. Whether you're a fan of adrenaline-pumping action,
intricate puzzles that challenge your intellect, or strategic games that test your planning skills, our
platform has something that will captivate and entertain you.
<br/> <br/>
Our extensive library of games is curated to ensure that there’s always something new and engaging to
discover. From the thrill of high-speed racing games to the satisfaction of solving complex puzzles, we
aim to provide high-quality gaming experiences that keep you coming back for more. Our platform is
designed to be user-friendly and accessible, making it easy for you to find your favorite games and dive
right into the action.
<br/> <br/>
One of the standout features of our site is our support for two-player games. Unlike many other platforms,
we understand the joy of sharing gaming moments with friends and family. Our website is tailored to
enhance this experience by allowing two players to control the game from the same keyboard. This feature
adds a layer of fun and competition, making our games ideal for group play and friendly rivalry. Imagine
teaming up with a friend to tackle challenges or competing head-to-head in an intense game—our platform
makes it possible and enjoyable.
<br/> <br/>
In addition to the core gaming experience, we are committed to providing a seamless and immersive
interface. Our website is designed with your convenience in mind, offering smooth navigation and quick
access to your favorite games. We continuously update our game library to include the latest and most
exciting titles, ensuring that there's always something fresh to explore.
<br/> <br/>
Our mission is not only to offer a great selection of games but also to foster a community of gamers who
share a passion for fun and excitement. We believe that gaming is more than just a pastime; it’s a way to
connect with others, build friendships, and create lasting memories. That’s why we strive to make our
platform a place where gamers can come together and enjoy high-quality games in a friendly and welcoming
environment.
<br/> <br/>
Whether you’re looking to challenge yourself, unwind after a long day, or have a great time with friends,
our gaming website has you covered. We invite you to explore our diverse range of games, take advantage of
our two-player feature, and immerse yourself in the world of online gaming like never before. Join us
today and experience the best in gaming entertainment!
</p>


<footer>
<div className="container" id="footer">
<div className="footer-content">
<h3>Contact Us</h3>
<p>Email: starnex@galaxy.com</p>
<p>Phone:+91 1234567890</p>
<p>Address: 123, Model Town, XYZ Nagar, Rajpura</p>
</div>
<div className="footer-content">
<h3>Quick Links</h3>
<ul className="list">
<li><Link to="/signup">Register</Link></li>
<li><Link to="/discover">Discover</Link></li>
<li><Link to="/iris">IrisAI</Link></li>
<li><Link to="/feedback">Feedback</Link></li>
<li><Link to="/contact">Contact</Link></li>
</ul>
</div>
<div className="footer-content">
<h3>Follow Us</h3>
<ul className="social-icons">
<li><Link to="https://www.facebook.com/"><img
src="/image/facebook-icon-png-4.png" alt="Facebook"
style={{height: '30px', width: '30px'}}/></Link></li>
<li><Link to="https://twitter.com/login"><img
src="/image/twitter-clipart.png" alt="x"
style={{height: '28px', width: '30px'}}/></Link></li>
<li><Link to="https://www.instagram.com/"><img
src="/image/instagram-new.png"
alt="instagram" style={{height: '30px', width: '30px'}}/></Link></li>
<li><Link to="https://www.youtube.com/"><img
src="/image/youtube-app-white-icon.png"
alt="yt" style={{height: '30px', width: '30px'}}/></Link></li>
</ul>
</div>
</div>
<div className="bottom-bar">
<p>&copy; 2024 STARNEX . All rights reserved</p>
</div>
</footer>
</div>
}

export default Home;
