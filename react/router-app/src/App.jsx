import { Link, Route, Routes } from 'react-router'
// import './App.css'
import Header from './components/Header'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Footer from './components/Footer'
import Contact from './Pages/Contact'



function App() {

  return (
    <>
    {/* <Header/>  */}
    {/* static thing on the page will be outside the Routes */}
      <Routes>
        <Route path="" element={<Home/>} />
       
        <Route path="projects" >
          <Route index element={<Projects/>} />
          
          <Route path=":key" element={<Contact/>} />

        </Route>
     

        

   

      </Routes>

    {/* static thing on the page will be outside the Routes */}
      {/* <Footer/> */}
    </>
  )
}

export default App
