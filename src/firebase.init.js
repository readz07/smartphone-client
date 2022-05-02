// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhhx9jfBojF69d9vyYM0ndsZRG0iG9y6o",
  authDomain: "smart-phone-inventory.firebaseapp.com",
  projectId: "smart-phone-inventory",
  storageBucket: "smart-phone-inventory.appspot.com",
  messagingSenderId: "391366717595",
  appId: "1:391366717595:web:95857ad617d6b9be73963e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
