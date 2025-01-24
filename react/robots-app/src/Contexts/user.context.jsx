import  { createContext, useContext, useEffect, useState } from 'react'

// react patterns 

// lego block 

export const UserContext = createContext({
    user:null,
    setUser:()=>null 
});


export const UserProvider = ({children}) =>{


    const [user,setUser] = useState(false);

    
    
    return(
    <UserContext.Provider value={{user,setUser}}>
    {children}
    </UserContext.Provider>
)
}