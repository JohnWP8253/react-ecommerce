import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC17wn0GQpcHwXoI4lYelMKm9fwY8wjk2Y",
  authDomain: "challenge-308a9.firebaseapp.com",
  projectId: "challenge-308a9",
  storageBucket: "challenge-308a9.appspot.com",
  messagingSenderId: "824449873288",
  appId: "1:824449873288:web:43a21f38fafb31cf10363d",
  measurementId: "G-QJ7PS5DXX7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };