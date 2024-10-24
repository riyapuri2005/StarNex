import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Cookies from "js-cookie";
import checkAuth from "../elements/CheckAuth";
import removeCSS from "../elements/RemoveCSS";
import addCSS from "../elements/AddCSS";
import addJS from "../elements/AddJS";

function Games() {
    const [toRender, CtoRender] = useState("")
    const navigate = useNavigate();
    useEffect(() => {
        let Bearer = Cookies.get('BEARER');
        checkAuth(Bearer).then(isCorrect => {
            if (isCorrect) {

                CtoRender(toReturn);
            }
            else { navigate("/login"); }
        })
    }, []);


  let toReturn =  (
      <div className="Game">
        <iframe src="https://www.example.com" title="Embedded Page"></iframe>
      </div>
    );
  return toRender;
}

export default Games;
