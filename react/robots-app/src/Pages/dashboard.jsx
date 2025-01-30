import React from 'react'
import { UserContext } from '../Contexts/user.context'
import { useContext } from 'react'
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Dashboard() {
    const {isLoggedIn} = useContext(UserContext);
    // const [isLogged,setIsLogged] = useState(isLoggedIn)
    const navigate = useNavigate();
    // if(!isLoggedIn){
    // }
    useEffect(()=>{
        if(!isLoggedIn)
            navigate('/login')
    },[])

  return (
    <div>
        Dashboard
        Cards to display or some ......
    </div>
  )
}
