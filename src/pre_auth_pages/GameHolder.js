import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import Cookies from "js-cookie";
import checkAuth from "../common_elements/CheckAuth";
import PostAuthGameHolder from "../post_auth_pages/GameHolder";


function PreAuthGameHolder({gameName, gameJSX}) {
    const [toRender, CtoRender] = useState("Checking Authentication")
    const navigate = useNavigate();
    useEffect(() => {
        let Bearer = Cookies.get('BEARER');
        checkAuth(Bearer).then(isCorrect => {
            if (isCorrect)
            {
                if(window.location !== window.parent.location) CtoRender(<PostAuthGameHolder gameName={gameName}/>);
                else CtoRender(gameJSX)
            }
            else {if(window.location === window.parent.location) navigate("/login"); }
        })
    }, []);
    return toRender;
}

export default PreAuthGameHolder;
