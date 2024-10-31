import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";  
import { getStorage } from "firebase/storage";       

const firebaseConfig = {
  apiKey: "AIzaSyAn3nUQ1398MbrPuxuT5tfUQPWkCsT3Saw",
  authDomain: "olx-clone-6688d.firebaseapp.com",
  projectId: "olx-clone-6688d",
  storageBucket: "olx-clone-6688d.appspot.com",
  messagingSenderId: "719206871948",
  appId: "1:719206871948:web:d4591d51c6db1d12b85ca9",
  measurementId: "G-YF2MMXHDKC"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);   
export const storage = getStorage(app); 
