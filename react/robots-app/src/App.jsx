
// import './App.css'

import { Link, Route, Routes } from 'react-router'
import Login from './Pages/login'
import Signup from './Pages/signup'


function Dashboard(){
return (
  <div>
    <h1>Dashboard screen</h1>
  </div>
)
}
  


function App() {

  return (
    <>
    <div className="mx-auto md:container ">
        {/* <h1 className='text-center text-2xl'  >Login Form</h1> */}
        {/* <Login/> */}
        <div>
          <ul>
            <li>
              <Link to="/login" >Login Form </Link>
            </li>
            <li>
              <Link to="/signup">SignUp</Link>
            </li>
          </ul>
        </div>
      <Routes>
      <Route path="/" element={<Dashboard/>} />

        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />

      </Routes>

    </div>
    </>
  )
}

export default App
