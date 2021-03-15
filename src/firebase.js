import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAXuVoHQSQzXddSIH9_M4ha62hIhaLU26g",
    authDomain: "twitter-e5d20.firebaseapp.com",
    projectId: "twitter-e5d20",
    storageBucket: "twitter-e5d20.appspot.com",
    messagingSenderId: "269179746524",
    appId: "1:269179746524:web:ffdba65bf1040758d91c19",
    measurementId: "G-NRMQKJG802"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;