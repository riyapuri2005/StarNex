import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import checkAuth from "../common_elements/CheckAuth";
import PostAuthContact from "../post_auth_pages/Contact";

function PreAuthContact() {
    const [toRender, CtoRender] = useState("Checking Authentication")
    const navigate = useNavigate();
    useEffect(() => {
        checkAuth().then(userData => {
            if (userData!==null) {CtoRender(<PostAuthContact />);}
            else { navigate("/login"); }
        })
    }, []);
    return toRender
}

export default PreAuthContact;
