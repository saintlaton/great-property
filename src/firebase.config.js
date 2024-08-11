// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABBu3IO6zmgrnttzXpCrPDhEODT2hFWZg",
  authDomain: "house-marketplace-app-f40dc.firebaseapp.com",
  projectId: "house-marketplace-app-f40dc",
  storageBucket: "house-marketplace-app-f40dc.appspot.com",
  messagingSenderId: "77020671967",
  appId: "1:77020671967:web:af0f2deecb99d2c1d4de6a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
