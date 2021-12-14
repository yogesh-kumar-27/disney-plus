import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGGqpr6sMZUr9px5Up1P63ifYNvXEjvro",
  authDomain: "disney-plus-67d67.firebaseapp.com",
  projectId: "disney-plus-67d67",
  storageBucket: "disney-plus-67d67.appspot.com",
  messagingSenderId: "418447876281",
  appId: "1:418447876281:web:56b0f1db5c5f08a084bb68",
  measurementId: "G-1R0HD8C0YP"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
