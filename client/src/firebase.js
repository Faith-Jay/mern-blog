// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-cec52.firebaseapp.com",
  projectId: "mern-blog-cec52",
  storageBucket: "mern-blog-cec52.appspot.com",
  messagingSenderId: "188558826757",
  appId: "1:188558826757:web:5074902e059e4d57206b6c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);