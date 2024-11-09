import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import checkAuth from "../common_elements/CheckAuth";
import PostAuthDiscover from "../post_auth_pages/Discover";

function PreAuthDiscover() {
    const [toRender, CtoRender] = useState("Checking Authentication")
    const navigate = useNavigate();
    useEffect(() => {
        checkAuth().then(isCorrect => {
            if (isCorrect) {CtoRender(<PostAuthDiscover />);}
            else { console.log("INCORERCT AUTH"); navigate("/login"); }
        })
    }, []);
    return toRender;
}

export default PreAuthDiscover;
