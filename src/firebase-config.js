import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBImJrQcGbunAvkoRj96Ke1JUhFS0E8j8E",
    authDomain: "fir-firebase-e547b.firebaseapp.com",
    projectId: "fir-firebase-e547b",
    storageBucket: "fir-firebase-e547b.appspot.com",
    messagingSenderId: "758083904955",
    appId: "1:758083904955:web:4f6638060b7a7853e5109e",
    measurementId: "G-34JJZGXW58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db