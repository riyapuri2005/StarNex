import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import checkAuth from "../common_elements/CheckAuth";
import PostAuthIris from "../post_auth_pages/Iris";

function PreAuthIris() {
    const [toRender, CtoRender] = useState("Checking Authentication")
    const navigate = useNavigate();
    useEffect(() => {
        checkAuth().then(userData => {
            if (userData!==null) {CtoRender(<PostAuthIris />);}
            else { navigate("/login"); }
        })
    }, []);
    return toRender;
}

export default PreAuthIris;
