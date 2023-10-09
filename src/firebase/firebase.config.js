// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPVt_L32DQkCaQLJclz8A-m5fLlrFxHls",
  authDomain: "cars-store-2a59f.firebaseapp.com",
  projectId: "cars-store-2a59f",
  storageBucket: "cars-store-2a59f.appspot.com",
  messagingSenderId: "766610876036",
  appId: "1:766610876036:web:84c67b896849f0719004d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;