// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYJZX-Crzdi6XSeVsMecmeqmqordG3vQ8",
  authDomain: "art-craft-store-66436.firebaseapp.com",
  projectId: "art-craft-store-66436",
  storageBucket: "art-craft-store-66436.appspot.com",
  messagingSenderId: "442380049049",
  appId: "1:442380049049:web:f03836e51dfccf092d3608"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;