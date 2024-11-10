import {useEffect} from "react";
import addCSS from "../common_elements/AddCSS";
import addJS from "../common_elements/AddJS";


function Feedback() {
    useEffect(() => {
        addCSS("/css/feedback.css");
        addCSS("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500&display=swap");
        addJS("https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js");
        addJS("https://code.jquery.com/jquery-3.2.1.slim.min.js");
        addJS("https://code.jquery.com/jquery-3.2.1.slim.min.js");
    });


    return <div className="Feedback" style={{backgroundColor: "black"}}>
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
}

export default Feedback;
