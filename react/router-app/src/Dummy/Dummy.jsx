// components/Layout.js

import { Link, Routes,Route, Outlet, Navigate } from 'react-router';
import './style.css';

export const Layout = ({ children }) => (
  <div className="layout">
    <Navbar />
    <main className="main-content">
      {children}
    </main>
    <Footer />
  </div>
);

const Dashboard = ()=> 
  <div>
    <h1>  Dashboard component</h1>
    <Outlet/>
</div>

const Contact = ()=> 
  <div>
    <h1>  Contact Us page component💥💥</h1>
    <Outlet/>
</div>

const Projects = ()=> <div>Projects component</div>
const Login = ()=> <div>Login component 🏹</div>
const SignUp = ()=> <div>SignUp component 😎</div>

// const Contact = () => <div>Contact Us page component💥💥</div>
const Service = () => <div>Service Now page component💥💥</div>

const AuthLayout = ()=>{
  const isAuthenciated = true;
  if(isAuthenciated){
    return <Navigate to="/dsfsd" replace/>
  }
  return (
    <>
     <Outlet/>
    </>
  )
}


export const Router = () =>{
  return(
      <Routes>
        <Route path="/" element={<Document/>} />
        <Route path="/dashboard" element={<Dashboard/>}>
          <Route path="contact" element={<Contact/>}>
            <Route path='service' element={<Service/>}/>
          </Route>
        </Route>
        <Route element={<AuthLayout/>}>
          <Route path="login" element={<Login/>} />
          <Route path="signUp" element={<SignUp/>} />

        </Route>


        <Route path="/projects" element={<Projects/>} />

        {/* <Route path="/login" element={<Login/>} /> */}

      </Routes>
  )
}

// components/Navbar.js
export const Navbar = () => (
  <nav className="navbar">
    <div className='logo nav-links' ><Link to="/">Logo</Link></div>
    

    <div className="nav-links">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/login">Login</Link>
    </div>
  </nav>
);

// components/Document.js
export const Document = () => (
  <div className="document">
    <h1>Title of Document</h1>
    <p className="description">title description</p>
    <div className="paragraph">Paragraph</div>
  </div>
);

// components/Footer.js
export const Footer = () => (
  <footer className="footer">
    <p>Footer</p>
  </footer>
);

// App.js
export default function App () {
    return (
        <Layout>
            <Router/>
      </Layout>
    )
 
};