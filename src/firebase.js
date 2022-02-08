/*
// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat';
require("firebase/firestore")

// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

var config = {
    apiKey: "AIzaSyALTuISbYMMdkrnjSODkHo78hM5jL10fBA",
    authDomain: "avva-1832b.firebaseapp.com",
    databaseURL: "https://avva-1832b-default-rtdb.firebaseio.com",
    projectId: "avva-1832b",
    storageBucket: "avva-1832b.appspot.com",
    messagingSenderId: "277163686377",
    appId: "1:277163686377:web:55390fe6af345806b67378"
};
// Initialize Firebase
const fb = firebase.initializeApp(config);
const db = firebase.firestore();
export {fb,db}

*/
// Import the functions you need from the SDKs you need
import firebase from "firebase/compat";

require("firebase/firestore")
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDj3s0-GvYMkLQBIvmKubx0YHRUjD_oZIk",
    authDomain: "webodev-ecf6b.firebaseapp.com",
    projectId: "webodev-ecf6b",
    storageBucket: "webodev-ecf6b.appspot.com",
    messagingSenderId: "566302695815",
    appId: "1:566302695815:web:e57395a96dec0dc417b322"
};

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export {fb,db}


