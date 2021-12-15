import firebase from 'firebase/compat/app'
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwigFCX5mhhTiwA3z-5H8fhwWPGWA7Atg",
  authDomain: "boggle-game-c7027.firebaseapp.com",
  projectId: "boggle-game-c7027",
  storageBucket: "boggle-game-c7027.appspot.com",
  messagingSenderId: "102031483438",
  appId: "1:102031483438:web:362c943d705dc7f41335bf"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth(); // firebase authentication
export const firestore = firebase.firestore(); // firestore db
export default firebase;