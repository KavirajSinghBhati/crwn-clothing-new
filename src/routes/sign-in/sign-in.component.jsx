import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react"; // for redirect

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  useEffect(() => {
    async function redirect() {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    }
    redirect();
  }, []);

  const googleOAuthPopup = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In page</h1>
      <button onClick={googleOAuthPopup}>Sign in with Google</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign in with Google redirect
      </button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
