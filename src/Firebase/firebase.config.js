import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBK99Oa0dMzVzFW0xYZUPLPiOFeY9cZCkA",
    authDomain: "food-sharing-ass.firebaseapp.com",
    projectId: "food-sharing-ass",
    storageBucket: "food-sharing-ass.firebasestorage.app",
    messagingSenderId: "60406207487",
    appId: "1:60406207487:web:b2f40a6ecfa5952d114dca"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
