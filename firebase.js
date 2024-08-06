// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiZVcDtE4_DhmQ-Ju6Oa6Q0m1eOX5L5ko",
  authDomain: "pantryapp-dcd9e.firebaseapp.com",
  projectId: "pantryapp-dcd9e",
  storageBucket: "pantryapp-dcd9e.appspot.com",
  messagingSenderId: "539914391344",
  appId: "1:539914391344:web:1209efc5e385da02fe82f5"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };

