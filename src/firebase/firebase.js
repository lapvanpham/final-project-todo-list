import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDE_9jcjGj6mO6i-QyiQbxG0PXKP20feOk",
  authDomain: "thingies-codegym-final.firebaseapp.com",
  projectId: "thingies-codegym-final",
  storageBucket: "thingies-codegym-final.appspot.com",
  messagingSenderId: "603903657546",
  appId: "1:603903657546:web:392f54900581a02155c8b3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();