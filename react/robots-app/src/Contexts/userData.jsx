import  { createContext, useContext, useState } from 'react'

// actual data is this of the state
const ThemeContext = createContext({
    theme:null,
    setTheme:()=> null
});

// this is the function to retrive the data from the context.  

function ThemeFunction() {
    const {theme,setTheme} = useContext(ThemeContext)

    function handleClick(){
        setTheme((prev)=>{
           return ((prev === "light") ? "dark" : "light")
        })
    }
    return (
    <div>
         <h1>current theme : {theme} </h1>
        <button className="border-[3px] border-black p-2 m-2" onClick={handleClick}>Change theme</button>
        <div className={`min-h-screen ${(theme === "light") ? "bg-blue-500":"bg-blue-900" }   `}>
        </div>
    </div>
  )
}

export default function UserData(){
   
    const [theme,setTheme] = useState("light");
    const value = {theme,setTheme}
    return (
        <ThemeContext.Provider value={value}>
            <ThemeFunction/>
        </ThemeContext.Provider>
    )
}