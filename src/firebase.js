import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; 


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCniK4loN6SjdIJV8eb3vh0YhzIs-U2_b4",
  authDomain: "portfolio-a1201.firebaseapp.com",
  projectId: "portfolio-a1201",
  storageBucket: "portfolio-a1201.firebasestorage.app",
  messagingSenderId: "52831574221",
  appId: "1:52831574221:web:ffe40194e608adcceef184",
  measurementId: "G-9CLK56BRF6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };