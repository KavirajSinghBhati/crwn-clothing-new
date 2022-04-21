import { initializeApp } from "firebase/app";

import { signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";

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

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());
};
