import React, {useEffect} from 'react';
import removeCSS from "../common_elements/RemoveCSS";
import addCSS from "../common_elements/AddCSS";
import removeJS from "../common_elements/RemoveJS";


function PostAuthGameHolder({gameName}) {
    useEffect(() => {
        removeCSS("/css/auth.css");
        removeCSS("/css/home.css");
        removeCSS("/css/discover.css");
        removeCSS("/css/feedback.css");
        removeCSS("/css/iris.css");
        removeJS("/js/iris.js");
        removeJS("/js/home.js");
        removeJS("/js/discover.js");
        addCSS("/css/game.css");
    }, []);

    return <iframe src={`/games/${gameName}/play`} title="Embedded Game"></iframe>
}

export default PostAuthGameHolder;
