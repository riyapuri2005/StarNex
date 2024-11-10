import {useEffect} from "react";
import addCSS from "../common_elements/AddCSS";
import addJS from "../common_elements/AddJS";
import {Link} from "react-router-dom";


function Contact() {
    useEffect(() => {
        addJS("/js/contact.js");
        addCSS("/css/contact.css");
        addCSS("https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
        addCSS("https://fonts.googleapis.com/css2?family=Poppins&family=Roboto+Slab&display=swap");
    });

    return <div className="Contact" style={{backgroundColor: "black"}}>
<div className="container mt-5">
<header>
<h1 style={{color:"azure"}}>Contact Us</h1>
<p style={{color:"azure", fontSize:"larger"}}>We'd excited to hear from you! Whether you have feedback about our games, suggestions for new features, or just want to say hello, feel free to reach out. Your input helps us make our website even better!</p>
</header>

<div className="content">
<div className="content-form">
<section>
<i id="iconFirst" className="fa fa-map-marker fa-2x" aria-hidden="true"></i>
<h2>address</h2>
<p>
Lorem ipsum dolor sit. <br/>
Lorem, ipsum dolor.

</p>
</section>

<section>
<i className="fa fa-phone fa-2x" aria-hidden="true"></i>
<h2>Phone</h2>
<p>123-456-78901548</p>
</section>

<section>
<i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
<h2>E-mail</h2>
<p className="paraThird">dghdgqd@temporary.net</p>
</section>
</div>

<form id="contact-form">
<div className="form">
<div className="right">
<div className="contact-form" style={{padding: '1%'}}>
<span style={{color:"aliceblue"}}>Full Name</span>
<input type="text" id="name" name="name" required/>

</div>

<div className="contact-form" style={{padding: '1%'}}>
<span style={{color:"aliceblue"}}>E-mail Id</span>
<input type="email" id="email" name="email" required/>

<span className="error-message"></span>
</div>

<div className="contact-form" style={{padding: '1%'}}>
<span style={{color:"aliceblue"}}>Type your Message....</span>
<input type="text" id="message" name="message" required/>

</div>

<div className="contact-form" style={{padding: '7%'}}>
<input type="submit" name="submit" value="Submit" style={{borderRadius: '10px', borderColor:'rgb(111, 108, 153)'}}/>
</div>
</div>
</div>
</form>
</div>

<div className="media">
<ul>
<li><i className="fa fa-facebook-square fa-2x" aria-hidden="true"><Link to=""></Link></i></li>
<li><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></li>
<li><i className="fa fa-whatsapp fa-2x" aria-hidden="true"></i></li>
<li><i className="fa fa-twitter-square fa-2x" aria-hidden="true"></i></li>
</ul>
</div>
</div>
</div>
}

export default Contact;
