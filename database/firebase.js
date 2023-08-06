// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjSUeptFhbrsscJwKh5OnOWPMNP0AZqpk",
  authDomain: "hotstar-99a4d.firebaseapp.com",
  projectId: "hotstar-99a4d",
  storageBucket: "hotstar-99a4d.appspot.com",
  messagingSenderId: "671392925782",
  appId: "1:671392925782:web:6e9bc93f4273001dad53f7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
