
// import './App.css'

import {  Route, Routes } from 'react-router'
import Login from './Pages/login'
import Signup from './Pages/signup'
import { ThemeProvider} from './Contexts/theme.context'
import Navbar from './Components/Navbar'

function Dashboard(){
return (
  <div>
    <h1>Dashboard screen</h1>
  </div>
)
}

function App() {

  return (
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
  )
}

export default App
