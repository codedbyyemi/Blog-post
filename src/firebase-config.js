import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQ6sfcqphdrFTs_7HQmlDQB54cxdKW9Uc",
  authDomain: "blogproject-94d56.firebaseapp.com",
  projectId: "blogproject-94d56",
  storageBucket: "blogproject-94d56.firebasestorage.app",
  messagingSenderId: "50604140552",
  appId: "1:50604140552:web:3542c4dad1a5c1f86809bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();