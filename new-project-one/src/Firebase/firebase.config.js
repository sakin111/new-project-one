// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6ErOLgfyXgoxd4mlyvlrI1_ek8wIoZuM",
  authDomain: "new-project-one-d548f.firebaseapp.com",
  projectId: "new-project-one-d548f",
  storageBucket: "new-project-one-d548f.appspot.com",
  messagingSenderId: "1074299562420",
  appId: "1:1074299562420:web:44b9efd3484084fcdceae1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
export default auth;