import React, { useState,useEffect} from 'react'
import { app, firestore } from '../firebase';
import database from '../firebase';
import { auth } from '../firebase';
import {onAuthStateChanged} from "firebase/auth";
import {ref, push,set, onValue} from 'firebase/database';
import "./css/todo.css"
import List from './List';
import { useNavigate,Link } from 'react-router-dom';
import { addDoc, collection, doc } from 'firebase/firestore';

const Todo = () => {
    const navigate = useNavigate();

    const userId = localStorage.getItem("userId");
    
    useEffect(() => {
        if(!userId) navigate("/login");
    },[])

    const [title,setTitle] = useState("");
    const [name,setName] = useState("");
    const [isLogin,setIsLogin] = useState(true);
 
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setIsLogin(true);
            setName(user.uid);
        } else {
            setIsLogin(false)
        }
        });

    const handleChange = (e) => {
        setTitle(e.target.value);
    }
    const handleLogout = () => {
        auth.signOut().then(() => {
            navigate("/");
        });    
    }

    
    const createTodo2 = async() => {
        console.log("fired");
        if(title === "") return alert("Enter Something");
        const userRef = doc(firestore, "Users", userId);
        const newTodo = {
            todo: title,
            createdAt: new Date().getTime(),
            status: "pending"
        }

        await addDoc(collection(userRef, "Todos"), newTodo).then(res => {
            // console.log(res.id);       <-----------------
            setTitle("");
        }).catch(err => {
            // console.error(err);    <----------------
        })
    }

  return (
    <div className='app'>
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
    <div className='i'>
        {/* <h1>Meal Planner</h1> */}
        {isLogin ? <h1>Meal Planner</h1> : navigate("/")}
        <input type="text" onChange={handleChange} id="me" value={title} required/>
        <button onClick={createTodo2} className="add">ADD</button>
        <br/>
        <List />
        </div>
        {/* <h1>Hi</h1> */}
    </div>
  )
}

export default Todo