import  { createContext, useContext, useState } from 'react'

// react patterns 

// lego block 
// import {auth} from '../utils/firebase.utils'
import firebase from '../utils/firebase.utils'
import {doc, getDoc, setDoc} from 'firebase/firestore'

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signInWithRedirect} from 'firebase/auth'




export const UserContext = createContext({
    isLoggedIn :null,
    setIsLoggedIn :() => null,
    signInWithGoogle:() => null,
    signInWithGoogleRedirect:() => null,
    createUserDocumentFromAuth:() => null
});

// const {} = useContext(UserContext)


export const UserProvider = ({children}) =>{

    const [isLoggedIn,setIsLoggedIn] = useState(false);

    const signInWithGoogle = async()=> await signInWithPopup(firebase.auth,firebase.googleProvider)
    const signInWithGoogleRedirect = async()=> await signInWithRedirect(firebase.auth,firebase.provider)
    const signIn = async(email,password)=> await signInWithEmailAndPassword(firebase.auth,email,password) // this is the function for the email and password

    const CreateUser = async(email,password)=> await createUserWithEmailAndPassword(firebase.auth,email,password)

    const createUserDocumentFromAuth = async(userAuth)=>{
        const userDocRef = doc(firebase.db,'users',userAuth.uid)
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

    const value ={
        isLoggedIn,
        setIsLoggedIn,
        signIn,
        CreateUser,
        signInWithGoogle,
        signInWithGoogleRedirect,
        createUserDocumentFromAuth
    }

    return(
    <UserContext.Provider value={value}>
    {children}
    </UserContext.Provider>
)
}