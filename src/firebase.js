// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/firestore'
import 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbeEiLSz597a7rHRm1j99QijyGshvW7FA",
  authDomain: "projectmind-50773.firebaseapp.com",
  projectId: "projectmind-50773",
  storageBucket: "projectmind-50773.appspot.com",
  messagingSenderId: "1066467749405",
  appId: "1:1066467749405:web:e2d933a8cf5b0d3b89e0f4",
  measurementId: "G-VFW1D8MMDB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();