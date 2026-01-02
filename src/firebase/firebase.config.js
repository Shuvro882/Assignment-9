// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwhb7A_I9mGYt4cNdBXkgc25-VU_miZ38",
  authDomain: "my-gamehub-webs.firebaseapp.com",
  projectId: "my-gamehub-webs",
  storageBucket: "my-gamehub-webs.firebasestorage.app",
  messagingSenderId: "893264768704",
  appId: "1:893264768704:web:4cd7a6d710227290d30725"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);