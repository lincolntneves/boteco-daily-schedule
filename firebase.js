import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDFPZ8_Pao8PWW27s6b0jQ12su0BucGEHM",
  authDomain: "boteco-schedule.firebaseapp.com",
  projectId: "boteco-schedule",
  storageBucket: "boteco-schedule.firebasestorage.app",
  messagingSenderId: "179497816262",
  appId: "1:179497816262:web:1d8e5b2bcd698b2c6207c7"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
