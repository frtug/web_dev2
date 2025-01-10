import { Link } from "react-router";

export default function Header(){
    return(
      <>
       <nav>
        <ul>
          <li><Link to="/">Home</Link> </li>
          <li><Link to="/landing">Landing</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/projects/github">Contact</Link></li>
  
        </ul>
      </nav>
      </>
    )
  }
  