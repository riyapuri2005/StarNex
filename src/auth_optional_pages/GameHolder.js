import React, {useEffect, useReducer} from 'react';
import {useNavigate} from "react-router-dom";
import checkAuth from "../common_elements/CheckAuth";
import PostAuthGameHolder from "../auth_compulsory_pages/GameHolder";
import CheckingAuth from "../common_elements/WaitingAuthVerificationPage";
import AngryMan from "../auth_compulsory_pages/AngryMan";
import CarRush from "../auth_compulsory_pages/CarRush";
import SpaceShip from "../auth_compulsory_pages/SpaceShip";
import SpaceRocks from "../auth_compulsory_pages/SpaceRocks";
import clearAllScripts from "../common_elements/ClearAllScripts";

function PreAuthGameHolder(props) {
    const chooseGame = (current, passData) => {
        switch (passData.page) {
            case "holder":
                console.log("Rendering Holder");
                return <PostAuthGameHolder gameName={passData.game}/>
            case "angryman":
                console.log("Rendering angryman");
                return <AngryMan />
            case "carrush":
                console.log("Rendering carrush");
                return <CarRush />
            case "spaceship":
                console.log("Rendering spaceship");
                return <SpaceShip />
            case "spacerocks":
                console.log("Rendering spacerocks");
                return <SpaceRocks />
            default:
                console.log("Invalid game request");
                return current;
        }
    };

    const [finalRender, updateRendered] = useReducer(chooseGame, <CheckingAuth />)
    const navigate = useNavigate();
    useEffect(() => {
        checkAuth().then(userData => {
            clearAllScripts();
            if (userData!==null)
            {
                if(window.location === window.parent.location) updateRendered({page:"holder", game:props.gameName});
                else updateRendered({page:props.gameName});
            }
            else {if(window.location === window.parent.location) navigate("/login"); }
        })
    }, [navigate, props.gameName]);
    return finalRender;
}

export default PreAuthGameHolder;
