import  { createContext, useContext, useEffect, useState } from 'react'


export const ThemeContext = createContext({
    theme:null,
    setTheme:()=> null
});

// useMemo and useCallback 
// useMemo is helping us when we want to cache the value some expensive  19290

// const expensiveValue = useMemo(()=>{
//     // doing some calculations of expensive value and we do't want to rerender the component again
// },[])


// const expensiveFunction = useCallback(()=>{
//     expensiveFunction(a,b)
// },[])
// dependenyArray

export const ThemeProvider = ({children}) =>{


    const [theme,setTheme] = useState("light");
    // const [darkMode,setDarkMode] = useState(theme)

    
    function autoTheme(){
        const time = new Date().getHours();
        console.log(time)

        if((time > 19 || time <= 7)  ){
            // dark mode
            console.log("dark")
            setTheme('dark')
        }
        else {
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
    // useEffect(() => {
    //     if (darkMode) {
    //       document.documentElement.classList.add("dark");
    //     } else {
    //       document.documentElement.classList.remove("dark");
    //     }
    //   }, [darkMode]);

    return(
    <ThemeContext.Provider value={{theme,setTheme}}>
    {children}
    </ThemeContext.Provider>
)
}