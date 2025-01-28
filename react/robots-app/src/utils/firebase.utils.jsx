import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgNcs1c4aAuiy77FzAkkk3YwZL_Jmuehw",
  authDomain: "fir-new-f7ddc.firebaseapp.com",
  projectId: "fir-new-f7ddc",
  storageBucket: "fir-new-f7ddc.firebasestorage.app",
  messagingSenderId: "692600719439",
  appId: "1:692600719439:web:a58632e4d0c3893022823a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    promot:"select_account"
})
export const signInWithGooglePopup = ()=> signInWithPopup(auth,provider);