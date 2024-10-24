import {useEffect} from "react";
import Cookies from "js-cookie";
import checkAuth from "../elements/CheckAuth";
import addCSS from "../elements/AddCSS";
import addJS from "../elements/AddJS";


function Iris() {


    useEffect(() => {
        addJS("/js/iris.js");
        addCSS("/css/Iris.css");
        addCSS("https://fonts.googleapis.com/css?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0");
    }, []);



  return (
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
}

export default Iris;
