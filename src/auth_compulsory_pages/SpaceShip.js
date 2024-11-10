import React, {useEffect} from 'react';

function SpaceShip() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "/games/spaceship/html5game/rock and arrow.js";
        script.onload  = () => {window.GameMaker_Init();};
        const existingScript = document.querySelector('script[src="/games/spaceship/html5game/rock and arrow.js"]');
        if (!existingScript) { document.head.appendChild(script); }
    });


    return <div className="SpaceShip">
            <div className="gm4html5_div_class" id="gm4html5_div_id">
                <canvas id="canvas" width="1280" height="720">
                    <p>Your browser doesn't support HTML5 canvas.</p>
                </canvas>
            </div>
        </div>
}

export default SpaceShip;
