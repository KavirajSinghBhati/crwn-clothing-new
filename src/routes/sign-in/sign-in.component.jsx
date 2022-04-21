import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const googleOAuth = async () => {
  const { user } = await signInWithGooglePopup();
  createUserDocumentFromAuth(user);
};

const SignIn = () => {
  return (
    <div>
      <h1>Sign In page</h1>
      <button onClick={googleOAuth}>Sign in with Google</button>
    </div>
  );
};

export default SignIn;
