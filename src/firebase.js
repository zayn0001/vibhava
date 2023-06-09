// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5j0ty3niJ2Cplj-DIh5XHS7PT6WoUke0",
  authDomain: "vibhava-cfb29.firebaseapp.com",
  projectId: "vibhava-cfb29",
  storageBucket: "vibhava-cfb29.appspot.com",
  messagingSenderId: "113566592625",
  appId: "1:113566592625:web:38a5a3e02a03bbd3a575d0",
  measurementId: "G-BQ4J5TTPLF",
  databaseURL: "https://vibhava-cfb29-default-rtdb.asia-southeast1.firebasedatabase.app"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
export {app, auth}
//export const db = getFirestore(app);
const database = getDatabase(app);

