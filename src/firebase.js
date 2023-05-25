// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABF6WckEWtBje2O1juixmGFkQcSkuO4E4",
  authDomain: "krishan-chatapp.firebaseapp.com",
  projectId: "krishan-chatapp",
  storageBucket: "krishan-chatapp.appspot.com",
  messagingSenderId: "449901762154",
  appId: "1:449901762154:web:393c8153f6e78ccbb0dc13"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);