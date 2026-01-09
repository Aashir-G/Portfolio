import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";
import { getFirestore, collection, addDoc, getDocs, orderBy, query, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCniK4loN6SjdIJV8eb3vh0YhzIs-U2_b4",
    authDomain: "portfolio-a1201.firebaseapp.com",
    projectId: "portfolio-a1201",
    storageBucket: "portfolio-a1201.firebasestorage.app",
    messagingSenderId: "52831574221",
    appId: "1:52831574221:web:ffe40194e608adcceef184",
    measurementId: "G-9CLK56BRF6"
  };

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, collection, addDoc, getDocs, orderBy, query, serverTimestamp };