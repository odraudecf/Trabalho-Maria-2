// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCXnvEPXmSKRqdtmIXgvBM4czK8f47AlQ",
  authDomain: "trabalho-mobile-2.firebaseapp.com",
  projectId: "trabalho-mobile-2",
  storageBucket: "trabalho-mobile-2.firebasestorage.app",
  messagingSenderId: "590004172021",
  appId: "1:590004172021:web:b2b457391cbd3d796fc1bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);