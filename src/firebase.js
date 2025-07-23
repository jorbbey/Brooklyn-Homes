// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";


// const firebaseConfig = {
//   apiKey: "AIzaSyDWasZtl6J_xGpkNWGUtygaMv1c7eWygGM",
//   authDomain: "brooklynhomes-blog.firebaseapp.com",
//   projectId: "brooklynhomes-media",
//   storageBucket: "brooklynhomes-blog.firebasestorage.app",
//   messagingSenderId: "837737387386",
//   appId: "1:837737387386:web:f7d4f40e777db2ed8e32c3",
//   measurementId: "G-KZBC14CZ51",
// };


// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// export { db };

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDmVwQNy-rPsjp_1roeyvp5r5COGB73ouQ",
  authDomain: "brooklynhomes-media.firebaseapp.com",
  projectId: "brooklynhomes-media",
  storageBucket: "brooklynhomes-media.firebasestorage.app",
  messagingSenderId: "98237442639",
  appId: "1:98237442639:web:86b7592efd57a5e764183a",
  measurementId: "G-JWEYZHGNBE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
