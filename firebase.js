import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAhRUdYgEUq2qKlj0qcxdfrDzoOgch4kow",
    authDomain: "fir-8090a.firebaseapp.com",
    databaseURL: "https://fir-8090a.firebaseio.com",
    projectId: "fir-8090a",
    storageBucket: "fir-8090a.appspot.com",
    messagingSenderId: "993419578360",
    appId: "1:993419578360:web:006a5cb4ee3f8ed830a40d",
    measurementId: "G-VE8KN07DPY"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
