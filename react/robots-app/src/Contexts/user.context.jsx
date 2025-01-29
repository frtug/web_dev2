import  { createContext, useState } from 'react'

// react patterns 

// lego block 
// import {auth} from '../utils/firebase.utils'
import f from '../utils/firebase.utils'

import { signInWithPopup, signInWithRedirect} from 'firebase/auth'




export const UserContext = createContext({
    user:null,
    setUser:()=>null 
});
export const signInWithGoogle = ()=> signInWithPopup(f.auth,f.provider)
export const signInWithGoogleRedirect = ()=> signInWithRedirect(f.auth,f.provider)


export const UserProvider = ({children}) =>{

    const [user,setUser] = useState(false);

    return(
    <UserContext.Provider value={{user,setUser}}>
    {children}
    </UserContext.Provider>
)
}