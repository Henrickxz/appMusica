
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAU8G3E1irtMdq6e1JgPxGVWmz_RIN3klU",
  authDomain: "musica-9d924.firebaseapp.com",
  projectId: "musica-9d924",
  storageBucket: "musica-9d924.appspot.com",
  messagingSenderId: "493798502636",
  appId: "1:493798502636:web:c4e2f934c66b851e5775c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);