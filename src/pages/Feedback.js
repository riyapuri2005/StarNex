import Cookies from "js-cookie";
import addCSS from "../elements/AddCSS";
import addJS from "../elements/AddJS";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import checkAuth from "../elements/CheckAuth";
import removeCSS from "../elements/RemoveCSS";
import removeJS from "../elements/RemoveJS";


function Feedback() {
    const [toRender, CtoRender] = useState("")
    const navigate = useNavigate();

    useEffect(() => {
        let Bearer = Cookies.get('BEARER');
        checkAuth(Bearer).then(isCorrect => {
            if (isCorrect) {
                removeCSS("/css/game.css");
                removeCSS("/css/auth.css");
                removeCSS("/css/home.css");
                removeCSS("/css/discover.css");
                removeCSS("/css/Iris.css");
                removeJS("/js/iris.js");
                removeJS("/js/home.js");
                removeJS("/js/discover.js");
                addCSS("/css/feedback.css");
                addCSS("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500&display=swap");
                addJS("https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js");
                addJS("https://code.jquery.com/jquery-3.2.1.slim.min.js");
                addJS("https://code.jquery.com/jquery-3.2.1.slim.min.js");
                CtoRender(toReturn);
            }
            else { navigate("/login"); }
        })
    }, []);


    let toReturn = (
        <div className="Feedback" style={{backgroundColor: "black"}}>
            <section id="form-section">
                <h1 className="h1-tag">Your Feedback Is important</h1>

                <form className="form-content-section">
                    <div className="form-group">
                        <label htmlFor="exampleInputText">Name</label>
                        <input type="text" className="form-control" id="exampleInputText" placeholder="Enter Your Name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputText">Contact Number(Optional)</label>
                        <input type="text" className="form-control" id="exampleInputText"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Tell us about your experience</label>
                        <input type="text" className="form-control" id="exampleFormControlTextarea1" rows="3"/>

                    </div>
                    <button type="submit" className="btn btn-primary myclass">Post Comment</button>
                </form>
            </section>
        </div>
    );
    return toRender;
}

export default Feedback;
