import React, {useEffect} from 'react';
import addCSS from "../common_elements/AddCSS";
import SubmitScore from "../common_elements/SubmitScore";

function PostAuthGameHolder({gameName}) {
    useEffect(() => {
        window["updateScore"] = SubmitScore;
        addCSS("/css/game.css");
    });

    return <div className="iframeholder"><iframe src={`/games/${gameName}/play`} title="Embedded Game"></iframe></div>
}
export default PostAuthGameHolder;
