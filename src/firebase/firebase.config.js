// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLYjXKqWZOkZEVHr_tH7EHhVMYXVcYkME",
  authDomain: "book-client-e7c00.firebaseapp.com",
  projectId: "book-client-e7c00",
  storageBucket: "book-client-e7c00.appspot.com",
  messagingSenderId: "729592247844",
  appId: "1:729592247844:web:e340484c19e7e8ad3c8ab1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;