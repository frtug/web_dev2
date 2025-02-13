import  { createContext, useContext, useEffect, useReducer, useState } from 'react'

// react patterns 

// lego block 

export const UserContext = createContext({
    user:null,
    setUser:()=>null 
});

const ACTION = {
    SET_USER:"SET_USER",
    SET_LOCATION:"SET_LOCATION"
}
const UserReducer =(state,action)=>{
    // action make change here
    const {type,payload} = action;
    
    switch(type){
        case ACTION.SET_USER:
            return{
                ...state,
                user: payload,
            }
        case ACTION.SET_LOCATION:
            return{
                ...state,
                location:payload
            }
        default:
            throw new Error(`unhangled type ${type} in usereducers`)
    }
} 

const Intial_state = {
    user:null, // intial state 
    location:"",
    
}

export const UserProvider = ({children}) =>{

// dispatch is the function who calls actions and will eventually trigger the reducers 
const [state,dispatch] = useReducer(UserReducer,Intial_state)

    // const [user,setUser] = useState(false); //context state manage

    const {user,location} = state;
    const setUser = (user)=>{
        dispatch({type:"SET_USER",payload:user})
    }
    const setLocation = (loc)=>{
        dispatch({type:"SET_LOCATION",payload:loc})
    }
    const value = {user,setUser,setLocation,location}
    
    return(
    <UserContext.Provider value={value}>
    {children}
    </UserContext.Provider>
)
}