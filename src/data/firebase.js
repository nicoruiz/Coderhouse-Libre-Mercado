import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAoRlpmVtNv7oH62vLpConN7xrRWdmUUtE",
    authDomain: "coder-libre-mercado.firebaseapp.com",
    projectId: "coder-libre-mercado",
    storageBucket: "coder-libre-mercado.appspot.com",
    messagingSenderId: "791656442786",
    appId: "1:791656442786:web:d5fcc57adc024acca620fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);