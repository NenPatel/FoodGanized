import React,{useEffect,useState} from 'react'
import { Link,Navigate,useNavigate} from 'react-router-dom';
import { auth } from '../firebase';
import {onAuthStateChanged} from "firebase/auth";
import "./css/about.css";

const About = () => {

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
    <div >
           <nav>
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
    <div>
        <br/>
        {/* <h3>FoodGanized - A Meal Planner Tool</h3> */}
        {isLogin ?<h3>FoodGanized - A Meal Planner Tool</h3> : navigate("/")}
         <img src={require('./images/meal4.png')} alt="Img" width="200px" height="200px"    /> 
        <br/>
        <p className='abt' >FoodGanized is a website that allow user to pre-plan their meals, weekly or  
            biweekly. This project will help user to prepare their meals for the day and
            save time without thinking of the dishes by designing a personalized meal 
            plan with the help of ready-made templates and easy-to-use tools. <br/>
            It is a 3-step process - Get Organized, Plan ahead and make a List. This step will
            help to be more productive spending rest of your time efficiently. Users may
            benefit most from incorporating into their routines, new ways to prepare
            easy, cost efficient, healthy meal at home that their family will enjoy. <br/>
             When you save recipes, you can organize them into separate meal categories, such
            as lunch and dinner. You can also enter and save your own recipes manually.
            The daily needs can be fulfilled by the designated meals, and the interactive<br/>
            diet planning scheme helps a user to adjust the plan in an easier way.</p>
    </div>
    </div>
  )
}

export default About