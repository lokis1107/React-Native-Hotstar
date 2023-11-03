// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "Your Firebase API key",
  authDomain: "# Import your authDomain Id",
  projectId: "# Import your Project Id",
  storageBucket: "# Import your storageBucket",
  messagingSenderId: "# Import your messaging Sender Id",
  appId: "# Import your appId",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
