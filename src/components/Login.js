import { signInWithEmailAndPassword } from 'firebase/auth';
import './css/login.css';
// import React from 'react'
// import { Link } from 'react-router-dom'
// import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth, auth2 } from '../firebase';

const Login = () => {

    const navigate = useNavigate();
    const [values,setValues] = useState({
        email : "",
        pass : ""
    });
    const [submitButtonDisabled,setSubmitButtonDisabled] = useState(false);

        const submit2 = () => {
            signInWithEmailAndPassword(auth2, values.email, values.pass).then(res => {
                // console.log(res.user.uid);     <--------
                localStorage.setItem("userId", res.user.uid);
                navigate("/home");
        }).catch(err => {
            // console.log(err);     <----------------
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
        {/* <label>E-mail</label> */}
        <input type="email" onChange={(e) => setValues((prev) => ({...prev, email : e.target.value}))} placeholder="Email" required/>
        <br/>
        {/* <label>Password</label> */}
        <input type="password" onChange={(e) => setValues((prev) => ({...prev, pass : e.target.value}))} placeholder="Password" required/>
        <br/>
        <button onClick={submit2} disabled={submitButtonDisabled}>Login</button>
        <br/>
        <br/>
        <p>Didn't have an account?
            <span id="logi">
                <Link to="/signup"> SignUp</Link>
            </span>
        </p>
        </div>
    </div>
  )
}

export default Login