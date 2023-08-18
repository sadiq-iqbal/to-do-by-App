// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBZw60_4Vg9ObH1OLGVJYlpqor0liHB-s",
  authDomain: "sadiq-todo.firebaseapp.com",
  projectId: "sadiq-todo",
  storageBucket: "sadiq-todo.appspot.com",
  messagingSenderId: "362732491461",
  appId: "1:362732491461:web:df38d375df4c4f184b56ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)