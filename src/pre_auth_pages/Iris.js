import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Cookies from "js-cookie";
import checkAuth from "../common_elements/CheckAuth";
import PostAuthIris from "../post_auth_pages/Iris";

function PreAuthIris() {
    const [toRender, CtoRender] = useState("Checking Authentication")
    const navigate = useNavigate();
    useEffect(() => {
        checkAuth(Cookies.get('BEARER')).then(isCorrect => {
            if (isCorrect) {CtoRender(<PostAuthIris />);}
            else { navigate("/login"); }
        })
    }, []);
    return toRender;
}

export default PreAuthIris;
