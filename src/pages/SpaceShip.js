import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import Cookies from "js-cookie";
import checkAuth from "../elements/CheckAuth";
import removeCSS from "../elements/RemoveCSS";
import addCSS from "../elements/AddCSS";
import removeJS from "../elements/RemoveJS";


function SpaceShip() {
    const [toRender, CtoRender] = useState("")
    const navigate = useNavigate();
    useEffect(() => {
        let isIframe = window.location !== window.parent.location;
        let Bearer = Cookies.get('BEARER');
        checkAuth(Bearer).then(isCorrect => {
            if (isCorrect) {
                if (isIframe)
                {
                    CtoRender(inFrame);
                    const script = document.createElement('script');
                    script.src = "/games/spaceship/html5game/rock and arrow.js";
                    script.onload  = () => {window.GameMaker_Init();};
                    const existingScript = document.querySelector('script[src="/games/spaceship/html5game/rock and arrow.js"]');
                    if (!existingScript) { document.head.appendChild(script); }
                }
                else
                {
                    removeCSS("/css/auth.css");
                    removeCSS("/css/home.css");
                    removeCSS("/css/discover.css");
                    removeCSS("/css/feedback.css");
                    removeCSS("/css/Iris.css");
                    removeJS("/js/iris.js");
                    removeJS("/js/home.js");
                    removeJS("/js/discover.js");
                    addCSS("/css/game.css");
                    CtoRender(outFrame);
                }
            }
            else {
                if(isIframe){}
                else navigate("/login"); }
        })
    }, []);



    let inFrame = (
        <div className="SpaceShip">
            <div className="gm4html5_div_class" id="gm4html5_div_id">
                <canvas id="canvas" width="1280" height="720">
                    <p>Your browser doesn't support HTML5 canvas.</p>
                </canvas>
            </div>
        </div>
    );
    let outFrame = (
        <iframe src="/games/spaceship/play" title="Embedded Page"></iframe>
    )
    return toRender;
}

export default SpaceShip;
