import  { useContext } from 'react'
import { ThemeContext } from '../Contexts/theme.context'
import { LinkHelper as Link} from '../utils/LinkHelper'
import { House, Moon, ScanEye, Sun, UserPlus } from 'lucide-react'

export default function Navbar() {
    const {theme,setTheme} = useContext(ThemeContext)
    
        function handleClick(){
            setTheme((prev)=>{
               return ((prev === "light") ? "dark" : "light")
            })
        }
  return (
    <nav className={`${theme === "light" ? "bg-gray-300 text-black" :"bg-gray-800 text-white"} p-4 `} >
        <div className="container mx-auto flex justify-between items-center">
            <div>
                <h1>Logo</h1>
            </div>
            <div className='flex items-center space-x-4'>
            <Link className="flex" to="/" >
                Home 
                <House className='w-6 h-6 ml-1 mr-2' />
            </Link>

            

            </div>
            <div className="flex ">

            <button onClick={handleClick} className={`${theme === "dark" 
            ? 'text-gray-400' 
            : 'text-yellow-800 '}
            `}>
                {theme=== "light" ? <Sun className="mr-2 w-6 h-6" /> :  <Moon className=" mr-2 w-6 h-6"/>}
            </button>
            <Link className="flex" to="/login" >
                Login
                <ScanEye className='w-6 h-6 ml-1 mr-2' />
             </Link>
             <Link className="flex" to="/signup" >
                signUp
                <UserPlus className='w-6 h-6 ml-1 mr-2' />
             </Link>
                
            </div>
        </div>
          {/* <ul>
            <li>
              <Link to="/login" >Login Form </Link>
            </li>
            <li>
              <Link to="/signup">SignUp</Link>
            </li>
          </ul>
          <ul>
            <button onClick={handleClick}>
                {theme}
            </button>
          </ul> */}

    </nav>
  )
}
