import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBdwF5X33Sbx6NZbOhcTpLjoJ9enhx4pV4",
    authDomain: "todolist-5f89f.firebaseapp.com",
    databaseURL: "https://todolist-5f89f.firebaseio.com",
    projectId: "todolist-5f89f",
    storageBucket: "todolist-5f89f.appspot.com",
    messagingSenderId: "44091671391",
    appId: "1:44091671391:web:71ed9243c8a4ade4532cea",
    measurementId: "G-DQWLZZDZZP"
  };

  firebase.initializeApp(firebaseConfig);

  export const database = firebase.database();