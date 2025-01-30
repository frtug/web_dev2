
// import './App.css'

import {  Route, Routes } from 'react-router'
import Login from './Pages/login'
import Signup from './Pages/signup'
import { ThemeProvider} from './Contexts/theme.context'
import Navbar from './Components/Navbar'
import { UserProvider } from './Contexts/user.context'
import Dashboard from './Pages/dashboard'
import ProtectedRoute from './Components/ProtectedRoute'



function App() {

  return (
    <UserProvider>
    <ThemeProvider>
      
    <div className="dark:text-blue-800  ">
        {/* <h1 className='text-center text-2xl'  >Login Form</h1> */}
        {/* <Login/> */}
        <Navbar />
      <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />

      </Routes>

    </div>
    </ThemeProvider>
    </UserProvider>

  )
}

export default App
