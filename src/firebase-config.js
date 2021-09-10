// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVha5umGTB6Rz8fG-Lps2lMpsIpwN6YR0",
  authDomain: "digisystems-be874.firebaseapp.com",
  projectId: "digisystems-be874",
  storageBucket: "digisystems-be874.appspot.com",
  messagingSenderId: "282790525301",
  appId: "1:282790525301:web:e44039e5cb17af3fe4fb3c",
  measurementId: "G-KTQ8VVZNPB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);