import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import checkAuth from "../common_elements/CheckAuth";
import PostAuthGameHolder from "../post_auth_pages/GameHolder";

function PreAuthGameHolder({gameName, gameJSX}) {
    const [toRender, CtoRender] = useState("Checking Authentication")
    const navigate = useNavigate();
    useEffect(() => {
        checkAuth().then(userData => {
            if (userData!==null)
            {
                if(window.location === window.parent.location) CtoRender(<PostAuthGameHolder gameName={gameName}/>);
                else CtoRender(gameJSX)
            }
            else {if(window.location === window.parent.location) navigate("/login"); }
        })
    }, []);
    return toRender;
}

export default PreAuthGameHolder;
