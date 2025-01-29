// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {doc, getDoc, getFirestore, setDoc} from 'firebase/firestore'
// Your web app's Firebase configuration

import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_APIKEY,
  authDomain: import.meta.env.VITE_REACT_APP_AUTHDOMAIN,
  projectId: import.meta.env.VITE_REACT_APP_PROJECTID,
  storageBucket: import.meta.env.VITE_REACT_APP_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_REACT_APP_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_REACT_APP_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt:"select_account"
});
export const db = getFirestore();




export const createUserDocumentFromAuth = async(userAuth)=>{
    const userDocRef = doc(db,'users',userAuth.uid)
    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef)
    // console.log(userSnapshot)
    // console.log(userSnapshot.exists());
    if(userSnapshot.exists()){
        console.log("user exists already")
    }
    if(!userSnapshot.exists()){
        const {displayName,email} = userAuth;
        const createdAt = new Date();
    try{
        await setDoc(userDocRef,{
            displayName,
            email,
            createdAt
        })
    }catch(error){
        console.log("message Some error is there",error.message)
    }
    }
    return userDocRef;
} 


const auth = getAuth(app);

export default {auth,provider}

// createUserWithEmailAndPassword // signUp 
// signInWithEmailAndPassword  // signIn 

