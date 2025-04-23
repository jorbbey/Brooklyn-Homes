import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDWasZtl6J_xGpkNWGUtygaMv1c7eWygGM",
  authDomain: "brooklynhomes-blog.firebaseapp.com",
  projectId: "brooklynhomes-blog",
  storageBucket: "brooklynhomes-blog.firebasestorage.app",
  messagingSenderId: "837737387386",
  appId: "1:837737387386:web:f7d4f40e777db2ed8e32c3",
  measurementId: "G-KZBC14CZ51",
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
