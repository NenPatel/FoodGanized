import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Signup from './components/Signup';
import { useEffect, useState } from 'react';
import { auth } from './firebase';
import Todo from './components/Todo';
import Contact from './components/Contact';
import About from './components/About';
// import firebase from './firebase';

function App() {
  const [userName,setUserName] = useState("");
  useEffect(() => {
   
    auth.onAuthStateChanged((user) => {
      // console.log(user);
      if(user){
        setUserName(user.displayName);
      }
      else{
        setUserName("");
      }
    });
  },[]);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/todo" element={<Todo user={userName}/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
