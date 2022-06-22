// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAfunFamS5VPFJPbhNV18E510VDZ7Rcjo",
  authDomain: "todo-app-380b8.firebaseapp.com",
  projectId: "todo-app-380b8",
  storageBucket: "todo-app-380b8.appspot.com",
  messagingSenderId: "100289121397",
  appId: "1:100289121397:web:4457160becfd2835a47c3c",
  measurementId: "G-LXWTWMYLK6",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

// Initialize Firebase
export const db = firebase.firestore();
export const auth = firebase.auth();
export const store = getFirestore(app);

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
