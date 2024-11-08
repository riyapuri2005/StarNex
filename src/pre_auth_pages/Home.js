import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Cookies from "js-cookie";
import checkAuth from "../common_elements/CheckAuth";
import PostAuthHome from "../post_auth_pages/Home";

function PreAuthHome() {
    const [toRender, changeToRender] = useState("Checking Authentication")
    const navigate = useNavigate();
    useEffect(() => {
        checkAuth(Cookies.get('BEARER')).then(isCorrect => {
            if (isCorrect) {changeToRender(<PostAuthHome />)}
            else { navigate("/login"); }
        })
    }, []);
    return toRender;
}

export default PreAuthHome;
