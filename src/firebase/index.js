import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAa9fh5ctzguZD34Tjc4G4e7wy0cJvAq88",
    authDomain: "ovconfshop.firebaseapp.com",
    databaseURL: "https://ovconfshop.firebaseio.com",
    projectId: "ovconfshop",
    storageBucket: "ovconfshop.appspot.com",
    messagingSenderId: "883792167267",
    appId: "1:883792167267:web:67e743ca252733400fd356"
};

const Firebase = firebase.initializeApp(firebaseConfig);
export default Firebase;