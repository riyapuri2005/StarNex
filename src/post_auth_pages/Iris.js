import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect} from "react";
import addCSS from "../common_elements/AddCSS";
import addJS from "../common_elements/AddJS";
import removeCSS from "../common_elements/RemoveCSS";
import removeJS from "../common_elements/RemoveJS";


function PostAuthIris() {
    useEffect(() => {
        removeCSS("/css/game.css");
        removeCSS("/css/auth.css");
        removeCSS("/css/home.css");
        removeCSS("/css/discover.css");
        removeCSS("/css/feedback.css");
        removeCSS("/css/iris.css");
        removeJS("/js/iris.js");
        removeJS("/js/home.js");
        removeJS("/js/discover.js");
        addJS("/js/iris.js");
        addCSS("/css/iris.css");
        addCSS("https://fonts.googleapis.com/css?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0");
    }, []);



  return <div className="show-chatbot">
<div className="chatbot">
<header>
<h2>IRIS</h2>
<span className="material-symbols-outlined">close</span>
</header>
<ul className="chatbox">
<li className="chat incoming">
<img src="/image/chatbot.png" alt="Chatbot Icon" className="chatbot-icon"/>
<p>Hi there<br/> How can I help you today?</p>
</li>
<li className="chat outgoing">
</li>
</ul>

<div className="chat-input">
<textarea placeholder="Enter a message..." required></textarea>
<span id="send-btn" className="material-symbols-outlined">send</span>
</div>
</div>
</div>
}

export default PostAuthIris;
