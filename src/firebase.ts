import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


//TODO:add Marias
const firebaseConfig = {
    apiKey: "AIzaSyBj28oKjh5d-c4zZ0F5PalaZOUyzz9m5bE",
    authDomain: "nutri-2656b.firebaseapp.com",
    projectId: "nutri-2656b",
    storageBucket: "nutri-2656b.firebasestorage.app",
    messagingSenderId: "912744652258",
    appId: "1:912744652258:web:91a62c6f80395d7702edbb",
    measurementId: "G-WVMJFXWSDL"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
