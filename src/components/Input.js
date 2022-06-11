import React from 'react';
import database, { firestore } from '../firebase';
import {ref, push,set,remove,update, child,get} from 'firebase/database';
import { auth } from '../firebase';
import {onAuthStateChanged} from "firebase/auth";
import { useState } from 'react';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import "./css/button.css";
// import { get } from 'http';

const Input = ({todo}) => {
    // const Input = (props) => {

        const userId = localStorage.getItem("userId");
        const [name,setName] = useState("");
       
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setName(user.uid);
            } else {
            }
            });

   

    const deleteTodo2 = async() => {
        const userRef = doc(firestore, "Users", userId);
        await deleteDoc(doc(userRef, "Todos", todo.todoId))
    }

    const completed2 = async() => {
        const userRef = doc(firestore, "Users", userId);
        await updateDoc(doc(userRef, "Todos", todo.todoId), {
            status:"completed"
        })
    }

    const pending2 = async() => {
        const userRef = doc(firestore, "Users", userId);
        await updateDoc(doc(userRef, "Todos", todo.todoId), {
            status:"pending"
        })
    }

  return (
    <div>
        {/* <h1>{props.todo.title}</h1> */}
        <br/>
        <h2 style={{color: `${todo.status === "completed" ? "darkgreen" : "red"}`}} >{todo.todo}</h2>
        <button onClick={deleteTodo2}>DELETE</button>
        {todo.status === "completed" ? <button onClick={pending2}>PENDING</button> : <button onClick={completed2}>COMPLETED</button>}
        <br/>
    </div>
  )
}

export default Input