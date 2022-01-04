import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// import { useRouteMatch } from "react-router-dom";

const config = {
  apiKey: "AIzaSyCL0s-nt1JGbFULzL1ygXPaHEjY3w9cxTM",
  authDomain: "crown-db-6a79d.firebaseapp.com",
  projectId: "crown-db-6a79d",
  storageBucket: "crown-db-6a79d.appspot.com",
  messagingSenderId: "425240601126",
  appId: "1:425240601126:web:e8cca52319e3f8fa933ce7",
  measurementId: "G-QWZTVWEPSH",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  // console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createDat = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createDat,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
