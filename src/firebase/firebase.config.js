// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Danger: Don't share in public
const firebaseConfig = {
  apiKey: "AIzaSyB2cIjy5l_da9h3JqxWnIqB6NYA26qDLFQ",
  authDomain: "dragon-news-2d041.firebaseapp.com",
  projectId: "dragon-news-2d041",
  storageBucket: "dragon-news-2d041.firebasestorage.app",
  messagingSenderId: "125287025620",
  appId: "1:125287025620:web:90923c3577f5558362a441"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);