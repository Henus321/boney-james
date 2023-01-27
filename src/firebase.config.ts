import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const FIREBASE_API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "boney-james-c978c.firebaseapp.com",
  projectId: "boney-james-c978c",
  storageBucket: "boney-james-c978c.appspot.com",
  messagingSenderId: "950740856907",
  appId: "1:950740856907:web:27644bb841e6d02a035dce",
};

initializeApp(firebaseConfig);
export const db = getFirestore();
