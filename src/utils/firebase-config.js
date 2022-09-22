
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUZjnaYGl6XLppVlzTro79uGr_74-ynR4",
  authDomain: "react-netflix-clone-d36b1.firebaseapp.com",
  projectId: "react-netflix-clone-d36b1",
  storageBucket: "react-netflix-clone-d36b1.appspot.com",
  messagingSenderId: "346702701739",
  appId: "1:346702701739:web:0a308be940d30bfe3a83ee",
  measurementId: "G-V3QS57DMR9"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);