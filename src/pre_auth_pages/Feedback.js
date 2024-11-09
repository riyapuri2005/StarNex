import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import checkAuth from "../common_elements/CheckAuth";
import PostAuthFeedback from "../post_auth_pages/Feedback";

function PreAuthFeedback() {
    const [toRender, CtoRender] = useState("Checking Authentication")
    const navigate = useNavigate();
    useEffect(() => {
        checkAuth().then(isCorrect => {
            if (isCorrect) {CtoRender(<PostAuthFeedback />);}
            else { navigate("/login"); }
        })
    }, []);
    return toRender;
}

export default PreAuthFeedback;
