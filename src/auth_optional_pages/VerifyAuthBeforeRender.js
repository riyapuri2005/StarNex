import React, {useEffect, useReducer} from "react";
import {useNavigate} from "react-router-dom";
import checkAuth from "../common_elements/CheckAuth";
import CheckingAuth from "../common_elements/WaitingAuthVerificationPage";
import PlayerData from "../common_elements/UserObject";
import Discover from "../auth_compulsory_pages/Discover";
import Home from "../auth_compulsory_pages/Home";
import Contact from "../auth_compulsory_pages/Contact";
import Iris from "../auth_compulsory_pages/Iris";
import Feedback from "../auth_compulsory_pages/Feedback";
import clearAllScripts from "../common_elements/ClearAllScripts";

function VerifyAuthBeforeRender(props) {
    const choosePage = (current, passData) => {
        switch (passData.page) {
            case "home":
                console.log("Rendering homepage");
                return <Home playerData={new PlayerData(passData.userData["NAME"], passData.userData["SCORE"])}/>
            case "discover":
                console.log("Rendering discover");
                return <Discover/>
            case "contact":
                console.log("Rendering contact");
                return <Contact/>
            case "iris":
                console.log("Rendering iris");
                return <Iris/>
            case "feedback":
                console.log("Rendering feedback");
                return <Feedback/>
            default:
                console.log("Invalid page request");
                return current;
        }
    };

    const [finalRender, updateRendered] = useReducer(choosePage, <CheckingAuth />)
    const navigate = useNavigate();
    useEffect(() => {
        checkAuth().then(userData => {
            clearAllScripts();
            if (userData!==null) {updateRendered({page:props.toChangeTo, userData:userData});}
            else { navigate("/login"); }
        })
    }, [navigate, props.toChangeTo]);
    return finalRender
}

export default VerifyAuthBeforeRender;
