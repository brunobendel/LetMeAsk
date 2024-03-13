import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAuVskqeFHwuqNuNTMUlQ5obyXPGClyq8E",
  authDomain: "letmeask-4fd88.firebaseapp.com",
  databaseURL: "https://letmeask-4fd88-default-rtdb.firebaseio.com",
  projectId: "letmeask-4fd88",
  storageBucket: "letmeask-4fd88.appspot.com",
  messagingSenderId: "524878957953",
  appId: "1:524878957953:web:03d4c1ee149a121f99ac80"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database };