import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDXhxk3ELt73l-RIMt5dFsIvRey8TF4Cc0",
    authDomain: "todo-app-react-a44c8.firebaseapp.com",
    projectId: "todo-app-react-a44c8",
    storageBucket: "todo-app-react-a44c8.appspot.com",
    messagingSenderId: "500091924173",
    appId: "1:500091924173:web:d821c24aa7caec75fb0384",
    measurementId: "G-1B579LHTJD"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export {db};