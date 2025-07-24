// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBrshd_XYDy9JUfCj4QQAeBMCxW03w2ww",
  authDomain: "shopcart-8b959.firebaseapp.com",
  projectId: "shopcart-8b959",
  storageBucket: "shopcart-8b959.firebasestorage.app",
  messagingSenderId: "765431344918",
  appId: "1:765431344918:web:b154e971daa7dde51f6a37",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
