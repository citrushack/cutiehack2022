import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBv5KmQOPGlIL1NjuBgTk8TEeuIj_9h-FU",

  authDomain: "cutiehack2022-6759b.firebaseapp.com",

  projectId: "cutiehack2022-6759b",

  storageBucket: "cutiehack2022-6759b.appspot.com",

  messagingSenderId: "503990233449",

  appId: "1:503990233449:web:7046f6013455ed592cb5f8",

  measurementId: "G-0LGJPBXDSY",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app, process.env.FIREBASE_STORAGE_BUCKET);

export default storage;
