// Libray which upload this on npm message display 

import { useContext, useRef } from "react"
import { ThemeContext } from "../Contexts/theme.context";
import { createUserWithEmailAndPassword } from "firebase/auth";
import fire from '../utils/firebase.utils' 

import { useNavigate } from "react-router";


export default function Signup() {
    // uncontrolled form 
    const email = useRef(); // doens't trigger re-render when any chnage on the field
    const password = useRef();
    const confirmPassword = useRef();
    const navigate = useNavigate();


    async function handeSubmit(e){
        e.preventDefault()
        console.log(email.current)
        console.log(password.current)
        console.log(confirmPassword.current.focus())
        // validation for pasword and confirm password. YOu can do here
        // validation function function
        console.log("submitted")

        if(password.current.value !== confirmPassword.current.value){
            return;
        }
        try{
            const user = await createUserWithEmailAndPassword(fire.auth,email.current.value,password.current.value)
            console.log("user Created")
            console.log(user)
            navigate('/')

        }catch(error){
            console.log("Error ",error)
        }
        
    }
        const {theme} = useContext(ThemeContext) 
    
  return (
    <div className={`min-h-screen flex items-center justify-center py-12 px-4  ${theme==="light" ? "bg-gray-300 text-black" : "bg-gray-900 text-white"} sm:px-6 lg:px-8`}>
    <div className='max-w-md w-full space-y-8'>
        <div>
            <h1>Signup Page</h1>
        </div>

    <form className='max-w-md mt-8 space-y-6 ' onSubmit={handeSubmit}>
        <div className='rounded-md shadow-sm space-y-4 '>
            <div>
                <label htmlFor="email" className='block text-sm font-large '>Email Address</label>
                <input id='email' type='email' name='email' ref={email} 
                className={`mt-1 appearance-none relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm`}
                />
                  {/* {errors.email && (
                    <p className='mt-2 text-sm text-red-400'> {errors.email}</p>
                )} */}
            </div>  
            <div>
                <label htmlFor="password" >Password</label>
                <input id='password' type='password' name='password' ref={password} 
                className={`mt-1 appearance-none relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm`}

                />
                {/* {errors.password && (
                    <p className='mt-2 text-sm text-red-400'> {errors.password}</p>
                )} */}
            </div>  
            <div>
                <label htmlFor="password2" >Confirm Password</label>
                <input id='password2' type='password' name='confirmPassword' ref={confirmPassword}
                className={`mt-1 appearance-none relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm`}

                />
                {/* {errors.password && (
                    <p className='mt-2 text-sm text-red-400'> {errors.password}</p>
                )} */}
            </div>  
            <div>
                <button type='submit' className='w-full border text-large rounded text-white bg-blue-500 hover:bg-blue-700'>
                    SignUp 
                </button>
            </div>
        </div>
    </form>
    </div>

</div>
  )
}
