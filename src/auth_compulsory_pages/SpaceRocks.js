import {useEffect} from "react";

function SpaceRocks() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "/games/spacerocks/html5game/Space Rocks.js";
        script.onload  = () => {window.GameMaker_Init();};
        const existingScript = document.querySelector('script[src="/games/spacerocks/html5game/Space Rocks.js"]');
        if (!existingScript) { document.head.appendChild(script); }
    });

    return <div className="SpaceRocks">
        <div className="gm4html5_div_class" id="gm4html5_div_id">
            <canvas id="canvas" width="1280" height="720">
                <p>Your browser doesn't support HTML5 canvas.</p>
            </canvas>
        </div>
    </div>
}

export default SpaceRocks;
