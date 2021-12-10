import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBaFXxr35awXFGImb9OzDk2XRT4rjzwKmo",
  authDomain: "training-exam-1f68d.firebaseapp.com",
  projectId: "training-exam-1f68d",
  storageBucket: "training-exam-1f68d.appspot.com",
  messagingSenderId: "374581283491",
  appId: "1:374581283491:web:f9320f898167a1bf150d16",
  measurementId: "G-Q1Q3RD8B82",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
