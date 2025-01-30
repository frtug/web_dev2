// import React from 'react'
import { useContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { ThemeContext } from '../Contexts/theme.context'
import { UserContext } from '../Contexts/user.context'
// useEffect(()=>{

//     // operations
    
//     // await fetch(url)
    
//     // 
//     return (()=> {
//         // this is unmounting of the component
//     })
    
//     // fetch 
    
// },[])

// const exp_value = useMemo(()=>{},[])
// const exp_function = useCallback(()=>{},[])

// const authContext = useContext()

// Component
    // State, 
    // hooks,
    // Functions you are going to write in that component


export default function Login() {
    const [formData,setFormData] = useState({
        email:"",
        password:""
    })
    const [errors,setErrors] = useState({
        email:"",
        password:''
    })
    const {setIsLoggedIn,signIn,signInWithGoogle,signInWithGoogleRedirect,createUserDocumentFromAuth} = useContext(UserContext)

    useEffect(()=>{
        //  getting he cookie
        const data = Cookies.get('formData');
        console.log(data)
    },[])
    // useEffect(()=>{
    //     // load data from the local Storage and session Storage
    //     // You can interchnage the names of the session storage to localStorage
    //     const savedData = JSON.parse(sessionStorage.getItem('formData'));
    //     if(savedData){
    //         console.log("saved Data loaded")
    //         setFormData(savedData)
    //     }
    // },[])
    

    function validateForm(){ // return true or false 
        let valid = true;
        // logic for all the email and password validation by using regex. 
        const er = {email:"",password:""};
        if(!formData.email){
            er.email = "Email is missing ";
            valid = false;
        }
        // elseif(form) // add more conditions whater you feels needs to be there.


        if(!formData.password){
            er.password = "Password is missing"
            valid = false
        }
        setErrors(er)
        return valid;
        // add regx for password where you want to have a minimum length or some pattern 
    }
    function handleChange(e){

        // optimised way 
        const {name,value} = e.target // destructure of object
    
        setFormData((prev)=>({...prev,[name]:value})) // dynamic way of accessing the value
        setErrors({email:"",password:""})
        Cookies.remove("formData")

        // if(value.length === 1){

        //     setErrors({email:"",password:""})
        // }
        //      This method is also okay but not optimised
        // if(e.target.name === 'name'){
        //     console.log("name field")
        //     setFormData((prev)=>({...prev,name:e.target.value}))

        // }
        // if(e.target.name === 'email'){
        //     console.log("email field")
        //     setFormData((prev)=>({...prev,email:e.target.value}))
        // }
        // setFormData((prev)=>({...prev,name:e.target.value}))
    }
    async function handeSubmit(e){
        // login happens with email password
        // sessionStorage.setItem('formData',JSON.stringify(formData))
        Cookies.set('formData',"user Logged in",{expires:7})

        e.preventDefault();
        if(validateForm()){
            console.log(formData)
            const {email,password} = formData;
            const {user} = await signIn(email,password)  
            if(user) setIsLoggedIn(true)
            console.log("Successfully Logged in",user)
            // call a api for sending the data for our backend 
        }
    }
    // merge this two function.
    async function googleSignIn(){
        const res = await signInWithGoogle(); 
        console.log(res)
        if(res.user) setIsLoggedIn(true)
        console.log(res)
        const userDocRef = createUserDocumentFromAuth(res.user) // creating a firestore document  
        console.log(userDocRef)
    }
    async function googleRedirect(){
        const {user} = signInWithGoogleRedirect();  
        if(user) setIsLoggedIn(true)
        // TODO:: getRedirectResult and make sure you added in use Effect() when mouning or updating happens on the component 
        // it will get triggered and give back you the data of the redirected result data.
    }
    
    const {theme} = useContext(ThemeContext) 
    // TODO:: Merge this two functions together to make one to handle both email and name field.
  return (
    <div className={`h-[calc(100vh-63.4px)] flex items-center justify-center py-12 px-4  ${theme==="light" ? "bg-gray-300 text-black" : "bg-gray-900 text-white"} sm:px-6 lg:px-8`}>
        <div className='max-w-md w-full space-y-8'>
        <div className='text-center text-2xl'>
            <h1 className='font-semibold'>Login Page</h1>

        </div>
        <form className='max-w-md mt-8 space-y-6 ' onSubmit={handeSubmit}>
            <div className='rounded-md shadow-sm space-y-4 '>
                <div>
                    <label htmlFor="email" className='block text-sm font-large '>Email Address</label>
                    <input id='email' type='email' name='email' value={formData.email} onChange={handleChange}
                    className={`mt-1 appearance-none relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm`}
                    />
                      {errors.email && (
                        <p className='mt-2 text-sm text-red-400'> {errors.email}</p>
                    )}
                </div>  
                <div>
                    <label htmlFor="password" >Password</label>
                    <input id='password' type='password' name='password' value={formData.password} onChange={handleChange}
                    className={`mt-1 appearance-none relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm`}

                    />
                    {errors.password && (
                        <p className='mt-2 text-sm text-red-400'> {errors.password}</p>
                    )}
                </div>  
                <div>
                    <button type='submit' className='w-full border text-large rounded text-white bg-blue-500 hover:bg-blue-700'>
                        Login 
                    </button>
                    <button type='button' onClick={googleSignIn} className='w-full border text-large rounded text-white bg-amber-500 hover:bg-amber-700'>
                        SignIn with Google 
                    </button>
                    <button type='button' onClick={googleRedirect} className='w-full border text-large rounded text-white bg-amber-500 hover:bg-amber-700'>
                        SignIn with Google Redirect
                    </button>
                    
                </div>
            </div>
        </form>
        </div>

    </div>
  )
}
