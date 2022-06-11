// import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// import firebase from "./firebase";
import {getAuth} from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";

// Darshan start
// import {getFirestore} from 'firebase/firestore';
const firebaseConfig2 = {
  apiKey: "AIzaSyAyGCxsO9fQ6UOgsdGDFkWd3NhXXxxieoY",
  authDomain: "authentication-b3367.firebaseapp.com",
  projectId: "authentication-b3367",
  storageBucket: "authentication-b3367.appspot.com",
  messagingSenderId: "468517345083",
  appId: "1:468517345083:web:bf6221f90f9224381d091e",
  measurementId: "G-F0BEPCP5Q5"
  // apiKey: "AIzaSyC6LtxJHd0YQtaFcsIa6lSV0Hkugy-Rtlk",
  // authDomain: "dailyutils2.firebaseapp.com",
  // projectId: "dailyutils2",
  // storageBucket: "dailyutils2.appspot.com",
  // messagingSenderId: "738886032617",
  // appId: "1:738886032617:web:ffa3e58e4de042414c6478",
  // measurementId: "G-Q0T1YH01PG",
};

// Darshan end

// const firebaseConfig = {
//   apiKey: "AIzaSyAyGCxsO9fQ6UOgsdGDFkWd3NhXXxxieoY",
//   authDomain: "authentication-b3367.firebaseapp.com",
//   projectId: "authentication-b3367",
//   storageBucket: "authentication-b3367.appspot.com",
//   messagingSenderId: "468517345083",
//   appId: "1:468517345083:web:bf6221f90f9224381d091e",
//   measurementId: "G-F0BEPCP5Q5"
// };


// export const app = initializeApp(firebaseConfig);


// Initialize Firebase
const app = initializeApp(firebaseConfig2);
// const app2 = initializeApp(firebaseConfig2);
const auth = getAuth();
export {app,auth};
const database = getDatabase(app);
// export const db = getFirestore(app);
export default database;

const auth2 = getAuth(app)
const firestore = getFirestore(app);
export {firestore, auth2}