// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbvIg_2r5qQJnWf5fKF-oESy_Jk6_doWk",
  authDomain: "chatapp-70e8d.firebaseapp.com",
  projectId: "chatapp-70e8d",
  storageBucket: "chatapp-70e8d.appspot.com",
  messagingSenderId: "1058531538678",
  appId: "1:1058531538678:web:6659f9c9e1b491f3595ed7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore()

export { auth, db }