
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "apps-e02e4.firebaseapp.com",
  databaseURL: "https://apps-e02e4-default-rtdb.firebaseio.com",
  projectId: "apps-e02e4",
  storageBucket: "apps-e02e4.appspot.com",
  messagingSenderId: "931728242416",
  appId: "1:931728242416:web:e1500b18be07765f293435",
  measurementId: "G-XN6ZN3Z5GW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)