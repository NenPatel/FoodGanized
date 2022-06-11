import React,{useEffect,useState} from 'react';
import "./css/contact.css";
import { Link,Navigate,useNavigate} from 'react-router-dom';
import { auth } from '../firebase';
import {onAuthStateChanged} from "firebase/auth";

const Contact = () => {

    const navigate = useNavigate();
    const [isLogin,setIsLogin] = useState(true);
    
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setIsLogin(true);
        } else {
            setIsLogin(false)
        }
        });

        const handleLogout = () => {
            auth.signOut().then(() => {
                navigate("/");
            });

        }


  return (
    <div>
           <nav >
        {/* <!-- <a href="index.html"><img src="logo.png"></a> --> */}
        <Link to="/home" className="hd">FoodGanized</Link>
        <div className="nav-links">
            <ul>
            <li><Link to="/home">HOME</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
                <li><Link to="/contact">CONTACT-US</Link></li>
                <li>{isLogin && <button className="but" onClick={handleLogout}>LOGOUT</button>}</li>
            </ul>

        </div>

    </nav>
        <br/>
        {/* <h3>Contact Form</h3> */}
        {isLogin ? <h3>Contact Form</h3> : navigate("/")}
    <br/>
<div className="containerx">

  <form action="mailto:nenspatel2001@gmail.com?subject=FeedBack" encType="text/plain" method="post" id='myform' >
  {/* <form  method="post" id='myform' target='_blank'> */}

    <label htmlFor="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.." required/>

     <label htmlFor="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.." required/>

    <label htmlFor="country">Country</label>
    <select id="country" name="country">
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select>

    <label htmlFor="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.." required></textarea>
    {/* <a href='mailto:nenspatel2001@gmail.com'>hi</a>  */}
    <input type="submit" value="Submit" />
    {/* <input type="reset" value="Reset" /> */}
  </form>
 
</div>
    </div>
  )
}
export default Contact;