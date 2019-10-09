import firebase from "firebase/app";
import 'firebase/firestore'
import Firebase from "@/firebase/index";

const db = Firebase.firestore();
export default db;

export const {GeoPoint, Timestamp} = firebase.firestore;