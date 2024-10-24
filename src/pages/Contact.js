import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Cookies from "js-cookie";
import checkAuth from "../elements/CheckAuth";
import removeCSS from "../elements/RemoveCSS";
import addCSS from "../elements/AddCSS";
import addJS from "../elements/AddJS";


function Contact() {
    const [toRender, CtoRender] = useState("")
    const navigate = useNavigate();
    useEffect(() => {
        let Bearer = Cookies.get('BEARER');
        checkAuth(Bearer).then(isCorrect => {
            if (isCorrect) {
                addCSS("/css/contact.css");
                addCSS("https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
                addCSS("https://fonts.googleapis.com/css2?family=Poppins&family=Roboto+Slab&display=swap");
                CtoRender(toReturn);
            }
            else { navigate("/login"); }
        })
    }, []);
  let toReturn = (
      <div className="Contact" style={{backgroundColor: "black"}}>


      </div>
  );
  return toRender
}

export default Contact;
