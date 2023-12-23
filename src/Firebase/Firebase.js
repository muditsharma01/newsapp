// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuyJr6MQXTwJI9wefHMjFunP2VTrzZCOk",
  authDomain: "news-app-5b1b3.firebaseapp.com",
  projectId: "news-app-5b1b3",
  storageBucket: "news-app-5b1b3.appspot.com",
  messagingSenderId: "817895979969",
  appId: "1:817895979969:web:a4ffccc880810ae3c28d40",
  measurementId: "G-RP4EMS8PDN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { app, auth, db };