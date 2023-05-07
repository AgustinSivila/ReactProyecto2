import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBS8vievTyZzbEMZXAGH5O2yCpA9tzqY_Q",
  authDomain: "coderhouse-react-fa1d1.firebaseapp.com",
  projectId: "coderhouse-react-fa1d1",
  storageBucket: "coderhouse-react-fa1d1.appspot.com",
  messagingSenderId: "135105648839",
  appId: "1:135105648839:web:d9fb197c69a9c3444546e2",
  measurementId: "G-P1N5MYTWFK"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, firebaseConfig };

