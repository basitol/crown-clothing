import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCL0s-nt1JGbFULzL1ygXPaHEjY3w9cxTM",
  authDomain: "crown-db-6a79d.firebaseapp.com",
  projectId: "crown-db-6a79d",
  storageBucket: "crown-db-6a79d.appspot.com",
  messagingSenderId: "425240601126",
  appId: "1:425240601126:web:e8cca52319e3f8fa933ce7",
  measurementId: "G-QWZTVWEPSH",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
