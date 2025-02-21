// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmKSEkK91Pb68pWRhzIuemik7FvhZXjEg",
  authDomain: "netflix-gpt-6eaea.firebaseapp.com",
  projectId: "netflix-gpt-6eaea",
  storageBucket: "netflix-gpt-6eaea.firebasestorage.app",
  messagingSenderId: "690970507387",
  appId: "1:690970507387:web:5bf4d0b9da28c991148ade",
  measurementId: "G-6K0Y98V1CM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
