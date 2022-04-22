import { initializeApp } from "firebase/app";

import {
  signInWithPopup,
  GoogleAuthProvider,
  getAuth,
  signInWithRedirect,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBugeFda9xk65EWNn6UQKlFAtDEmtQSUCs",
  authDomain: "crwn-clothing-db-905da.firebaseapp.com",
  projectId: "crwn-clothing-db-905da",
  storageBucket: "crwn-clothing-db-905da.appspot.com",
  messagingSenderId: "7851234071",
  appId: "1:7851234071:web:15be05c75188dddbcc1d52",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (err) {
      console.log("error occured creating the user ", err.message);
    }
  }
  return userDocRef;
};

export const userDocumentAuthForEmailAndPassword = async (
  userAuth,
  userDetails
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userDetails;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (err) {
      console.log("error occured creating the user ", err.message);
    }
  }
  return userDocRef;
};

export const createAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export default firebaseApp;
