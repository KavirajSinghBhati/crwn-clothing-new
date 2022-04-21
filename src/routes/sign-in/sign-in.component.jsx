import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const googleOAuth = async () => {
  const response = await signInWithGooglePopup();
  console.log(response);
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
