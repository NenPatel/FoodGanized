// import { ref } from 'firebase/database';
import React, { useEffect,useState } from 'react'
import database, { firestore } from '../firebase';
// import {ref, push,set, onValue} from 'firebase/database';
import Input from './Input';
import { auth } from '../firebase';
import {onAuthStateChanged} from "firebase/auth";
import { collection, doc, onSnapshot } from 'firebase/firestore';

const List = () => {

    const [todoList, setTodoList] = useState([]);
    const [name,setName] = useState("");
    const userId = localStorage.getItem("userId");

    // let user = auth().currentUser;
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setName(user.uid);
        } else {
        }
        });


    useEffect(() => {
        if(!userId) return;
        const userRef = doc(firestore, "Users", userId)
        onSnapshot(collection(userRef, "Todos"), (data) => {
            setTodoList(data.docs.map((item) => {
                return{
                    ...item.data(),
                    todoId: item.id
                }
            }))
        })
    }, [])


  return (
    <div style={{display:'grid', gridTemplateColumns:'1fr 1fr'}} >
        {/* <h1>ToDoList</h1> */}
        <div>
            <br/>
            <h4 style={{fontSize:"23px"}}>Planned Meals</h4>
        {todoList && todoList.map((todo,index) => todo.status === "pending" && <Input todo={todo} key={index} />) }
        </div>
        <div>
            <br/>
        <h4 style={{fontSize:"23px"}}>Completed Meals</h4>
        {todoList && todoList.map((todo,index) => todo.status === "completed" && <Input todo={todo} key={index} />) }
        </div>
    </div>
  )
}

export default List