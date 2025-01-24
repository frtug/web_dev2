import  { createContext, useContext, useEffect, useState } from 'react'


export const ThemeContext = createContext({
    theme:null,
    setTheme:()=> null
});

export const ThemeProvider = ({children}) =>{


    const [theme,setTheme] = useState("light");

    function autoTheme(){
        const time = new Date().getHours();
        console.log(time)

        if((time > 19 && time <=23) || (time >=0 && time <= 7)  ){
            // dark mode
            console.log("dark")
            setTheme('dark')
        }
        else if(time > 8){
            // light mode
            console.log("light")

            setTheme('light')

        }
        console.log(time)
    }

    useEffect(()=>{
        console.log("mounting")
        autoTheme();

    },[])
    return(
    <ThemeContext.Provider value={{theme,setTheme}}>
    {children}
    </ThemeContext.Provider>
)
}