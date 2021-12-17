import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBjTo5bbl3NIVuuYTOyd3tF-l344b5PU1U",
  authDomain: "wily-app-68fc5.firebaseapp.com",
  projectId: "wily-app-68fc5",
  storageBucket: "wily-app-68fc5.appspot.com",
  messagingSenderId: "925002706918",
  appId: "1:925002706918:web:e45e6deeb499fa79e67027"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
