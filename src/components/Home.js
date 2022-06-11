// import { FirebaseError } from 'firebase/app';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import {onAuthStateChanged} from "firebase/auth";
import './css/home.css';


const Home = () => {

    const navigate = useNavigate();
    const [isLogin,setIsLogin] = useState(true);
    const [name,setName] = useState("");

    onAuthStateChanged(auth, (user) => {
    if (user) {
        setIsLogin(true);
        setName(user.displayName);
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

<section className="header-h">
    <nav id="ho">
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
    <div className='par'>
    <div className="text-box">
    {isLogin ? <h1 className='wel'>Welcome {name}</h1> : navigate("/")}
        <h2>MEAL PLANER</h2>
        <p>FoodGanized is a Meal Planner Web Tool  <br/> which can help Individuals to Manage their <br/>Time in Effective Manner.</p>
        {/* <a href="" className="hero-btn">MAKE YOUR MEAL KNOW</a> */}
        <Link to="/todo" className="hero-btn">Try Now</Link>
    </div>       
    </div>
    <br/>
    <br/>
</section>
    
  )}

export default Home