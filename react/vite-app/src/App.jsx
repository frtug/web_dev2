// import { useState } from 'react' // hooks
import { Component } from 'react'
import './App.css'
import  { ArrayCardComponent } from './Card'
import Robots from './assets/robots.json'


class App extends Component{
  constructor(){
    super()
    this.state = {
      robots:Robots,
      searched:''
    }
  }
  handleChange = (e)=> {
    let search = e.target.value
    console.log(e.target.value)
    let filteredRobot = Robots.filter((item)=>{
      return item.name.toLowerCase().includes(search.toLowerCase())
    })
    this.setState({ searched:search, robots:filteredRobot})
  }
  render(){
    return(
      <div>
        <div > 
            <h1 className='font-roboto'>ROBOT GAME</h1>
            <input type="text" placeholder='Search Robot' className='pa2' value={this.state.searched} onChange={this.handleChange}/>
        </div>
        <ArrayCardComponent Robots={this.state.robots}/>
      </div>
      )
  }
  
}






export default App




//  functional component
// hooks 
// function App(props) {
//   return (
//       <>
//         <h1>Hello + React</h1>
//         <p className="read-the-docs">
//         New to react js, Exicting {props.msg}
//         </p>
//       </> 
//   )
// }

// Mount 
// update 
// unmount (remove)


// class based component

// class App extends Component{
// import { Component } from 'react'
// class App extends React.Component{
//   constructor(props){
//     super(props)
//     this.state ={
//       msg:props.msg
//     }
//   }
//   render(){
//     return(
//       <>
//          <h1>Hello + React</h1>
//          <p className="read-the-docs">
//          New to react js, Exicting 
//          <span>{this.state.msg}</span>
//         </p>
//        </> 
//     )
//   }
// }




