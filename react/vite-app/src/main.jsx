import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import { createElement } from 'react'
import 'tachyons'

// const element = createElement('h1',null,"I am a h1 Tag in jsx")
{/* <h1>I am a h1 Tag in jsx</h1> */}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1 className='hr' >H1</h1>
    <App msg="I am the parent2 "/>
  </StrictMode>
)
