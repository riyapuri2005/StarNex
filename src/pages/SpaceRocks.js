import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import Cookies from "js-cookie";
import checkAuth from "../elements/CheckAuth";
import removeCSS from "../elements/RemoveCSS";
import addCSS from "../elements/AddCSS";
import addJS from "../elements/AddJS";

// const script = document.createElement('script');
//                 script.src = "/games/spacerocks/html5game/Space%20Rocks.js";
//                 script.onload  = () => {window.GameMaker_Init();};
//                 const existingScript = document.querySelector('script[src="/games/spacerocks/html5game/Space%20Rocks.js"]');
//                 if (!existingScript) { document.head.appendChild(script); }
//                 CtoRender(toReturn);

function SpaceRocks() {
    const [toRender, CtoRender] = useState("")
    const navigate = useNavigate();
    useEffect(() => {
        let Bearer = Cookies.get('BEARER');
        checkAuth(Bearer).then(isCorrect => {
            if (isCorrect) {
                const script = document.createElement('script');
                script.src = "/games/spacerocks/html5game/Space%20Rocks.js";
                script.onload  = () => {window.GameMaker_Init();};
                const existingScript = document.querySelector('script[src="/games/spacerocks/html5game/Space%20Rocks.js"]');
                if (!existingScript) { document.head.appendChild(script); }
                CtoRender(toReturn);
            }
            else { navigate("/login"); }
        })
    }, []);



    let toReturn = (
        <div className="SpaceRocks">
            <div className="gm4html5_div_class" id="gm4html5_div_id">
                <canvas id="canvas" width="1280" height="720">
                    <p>Your browser doesn't support HTML5 canvas.</p>
                </canvas>
            </div>
        </div>
    );
    return toRender;
}

export default SpaceRocks;
