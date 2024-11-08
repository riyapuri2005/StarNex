import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Cookies from "js-cookie";
import checkAuth from "../common_elements/CheckAuth";
import PostAuthContact from "../post_auth_pages/Contact";

function PreAuthContact() {
    const [toRender, CtoRender] = useState("Checking Authentication")
    const navigate = useNavigate();
    useEffect(() => {
        checkAuth(Cookies.get('BEARER')).then(isCorrect => {
            if (isCorrect) {CtoRender(<PostAuthContact />);}
            else { navigate("/login"); }
        })
    }, []);
    return toRender
}

export default PreAuthContact;
