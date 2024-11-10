import removeCSS from "./RemoveCSS";
import removeJS from "./RemoveJS";

function ClearAllScripts(){
    removeCSS("/css/auth.css");
    removeCSS("/css/contact.css");
    removeCSS("/css/discover.css");
    removeCSS("/css/feedback.css");
    removeCSS("/css/game.css");
    removeCSS("/css/home.css");
    removeCSS("/css/iris.css");
    removeCSS("/css/login.css");
    removeJS("/js/contact.js");
    removeJS("/js/discover.js");
    removeJS("/js/feedback.js");
    removeJS("/js/home.js");
    removeJS("/js/iris.js");
    removeJS("/js/signup.js");
}

export default ClearAllScripts;

