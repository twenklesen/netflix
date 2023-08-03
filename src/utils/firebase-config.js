
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBcGKtNdTO7d4JLJSQTawyANorYAXRGpwI",
  authDomain: "netflix-clone-d57e9.firebaseapp.com",
  projectId: "netflix-clone-d57e9",
  storageBucket: "netflix-clone-d57e9.appspot.com",
  messagingSenderId: "641440322017",
  appId: "1:641440322017:web:19563d86499623d05e82a0",
  measurementId: "G-23ZLPGG57P"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth= getAuth(app)