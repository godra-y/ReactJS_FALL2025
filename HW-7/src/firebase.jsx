import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB7h7uzrsvwRPma7t3gZtoGkGZE2X5qIqQ",
  authDomain: "rick-and-morty-list-20857.firebaseapp.com",
  projectId: "rick-and-morty-list-20857",
  storageBucket: "rick-and-morty-list-20857.firebasestorage.app",
  messagingSenderId: "350234951366",
  appId: "1:350234951366:web:f79cbedeed20249e4021c7",
  measurementId: "G-Z6Y8Y6R10E",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
