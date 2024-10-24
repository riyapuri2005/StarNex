import {useEffect, useState} from "react";
import Cookies from "js-cookie";
import checkAuth from "../elements/CheckAuth";
import addCSS from "../elements/AddCSS";
import addJS from "../elements/AddJS";
import {useNavigate} from "react-router-dom";
import removeCSS from "../elements/RemoveCSS";
import removeJS from "../elements/RemoveJS";


function Iris() {
    const [toRender, CtoRender] = useState("")
    const navigate = useNavigate();
    useEffect(() => {
        let Bearer = Cookies.get('BEARER');
        checkAuth(Bearer).then(isCorrect => {
            if (isCorrect) {
                removeCSS("/css/game.css");
                removeCSS("/css/auth.css");
                removeCSS("/css/home.css");
                removeCSS("/css/discover.css");
                removeCSS("/css/feedback.css");
                removeCSS("/css/Iris.css");
                removeJS("/js/iris.js");
                removeJS("/js/home.js");
                removeJS("/js/discover.js");
                addJS("/js/iris.js");
                addCSS("/css/Iris.css");
                addCSS("https://fonts.googleapis.com/css?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0");
                CtoRender(toReturn);
            }
            else { navigate("/login"); }
        })
    }, []);



  let toReturn = (
      <div className="Iris show-chatbot">
          <header>
              <h2>
                  <b>IRIS</b>
              </h2>
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
  );
  return toRender;
}

export default Iris;
