import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../Contexts/user.context'
import { useNavigate } from 'react-router'
import { useEffect } from 'react'

function ProtectedRoute({children}) {
  const {isLoggedIn }  = useContext(UserContext)
  console.log("isloggedIn",isLoggedIn)
  const navigate = useNavigate()

  if(isLoggedIn){
        navigate('/')
  }
  useEffect(()=>{
    if(!isLoggedIn){
      navigate('/login')
    }
  },[])
  return (
    <>
      {isLoggedIn ?  children : 
      <></>
      }
    </>
  )
  // if(isLoggedIn){
  //   return (
  //     <>{children}</>
  //   )
  // }
  // else{
  //   navigate('/')
  //   return (
  //     <><h1>You havnt logged in, do the login </h1></>
  //   )
  // }
 
}

export default ProtectedRoute