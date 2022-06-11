import { async } from '@firebase/util';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth, auth2 } from '../firebase';
import './css/login.css';

const Signup = () => {
    const navigate = useNavigate();
    const [values,setValues] = useState({
        name : "",
        email : "",
        pass : ""
    });
    const [submitButtonDisabled,setSubmitButtonDisabled] = useState(false);
        
        const submit2 = () => {
            createUserWithEmailAndPassword(auth2, values.email, values.pass).then(res => {
                // console.log(res.user.uid);     <---------------
                localStorage.setItem("userId", res.user.uid);
                navigate("/home");
        }).catch(err => {
            // console.error(err);     <-------------
            alert(err.message);
        })
    }

  return (
    
         <div className='container'>
        <div className='box'>
            <p className='main'>Welcome to FoodGanized </p>
            <br/>
            <p>FoodGanized is a Meal Planner Web Tool which can help Individuals to Manage their Time in Effective Manner.</p>
            <p>Join Us and Manage your Time Well</p>
            <p>Create an Account and Get Started</p>
            <img src={require('./images/meal1.png')} width="200px" height="200px"    />
        </div>
        <div className='log'>
            <h1>Get Started</h1>
        {/* <label>Name</label> */}
        <input type="text" className="na" onChange={(e) => setValues((prev) => ({...prev, name : e.target.value}))} placeholder="Name" required/>
        <br/>
        {/* <label>E-mail</label> */}
        <input type="email" onChange={(e) => setValues((prev) => ({...prev, email : e.target.value}))} placeholder="Email" required/>
        <br/>
        {/* <label>Password</label> */}
        <input type="password" onChange={(e) => setValues((prev) => ({...prev, pass : e.target.value}))} placeholder="Password" required/>
        <br/>
        <br/>
        <button onClick={submit2} disabled={submitButtonDisabled}>SignUp</button>
        <br/>
        <br/>
        <p>Already have an account?
            <span>
                <Link to="/"> Login</Link>
            </span>
        </p>
    </div>
    </div>
  )
}

export default Signup