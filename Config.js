import firebase from 'firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBvml-VS8zKOw2hNuKHH4DGY3wxncqEOwk",
    authDomain: "bedtimestories-c273c.firebaseapp.com",
    databaseURL: "https://bedtimestories-c273c.firebaseio.com",
    projectId: "bedtimestories-c273c",
    storageBucket: "bedtimestories-c273c.appspot.com",
    messagingSenderId: "731730075805",
    appId: "1:731730075805:web:53e5ce924cc00cf7e37474"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore