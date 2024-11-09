import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import checkAuth from "../common_elements/CheckAuth";
import PostAuthHome from "../post_auth_pages/Home";
import PlayerData from "../common_elements/UserObject";

function PreAuthHome() {
    const [toRender, changeToRender] = useState("Checking Authentication")
    const navigate = useNavigate();
    useEffect(() => {
        checkAuth().then((userData) => {
            if (userData!==null)
            {
                changeToRender(<PostAuthHome playerData={new PlayerData(userData["NAME"], userData["SCORE"])} />)
            }
            else { navigate("/login"); }
        })
    }, []);
    return toRender;
}

export default PreAuthHome;
