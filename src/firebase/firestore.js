import {Firebase} from "@/firebase/index";

export const db = Firebase.firestore();

const { TimeStamp, GeoPoint } = Firebase.firestore;
export { TimeStamp, GeoPoint }
