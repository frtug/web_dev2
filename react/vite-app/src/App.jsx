// import { useState } from 'react' // hooks
import { Component } from 'react'
import './App.css'
import  { ArrayCardComponent } from './Card'
import Robots from './assets/robots.json'
import SearchedComponent from './SearchedComponent.jsx'
import WraperComponent from './Wrapper.jsx'
import Header from './Header.jsx'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      robots:[],
      searched:''
    }
    console.log("constructor")
  }
  componentDidMount(){
    console.log("Mounting the component")
    fetch('https://jsonplaceholder.typicode.com/users').then(
      (res)=> res.json()).then(data=> {this.setState({robots : data} )}) 
  }
  componentDidUpdate(){
    console.log("component is updated")
  }
  componentWillUnmount(){
    console.log("component is unmounted")
  }

   handleChange = (e)=> {
    let search = e.target.value
    console.log("input value ",search)
    this.setState({searched:search})
    console.log("seached value from this state",this.state.searched) 

  }
  handleClick = ()=>{
    console.log(this.state.searched)
  }

  render(){
    console.log("render")
    let filteredRobot = this.state.robots.filter((item)=>{
      return item.name.toLowerCase().includes(this.state.searched)
    })
    
    return(
      <>
        <div> 
            {/* <h1 className='font-roboto hr'>ROBOT GAME <span> {this.props.msg}</span></h1> */}
            <Header msg={this.props.msg}/>
            <SearchedComponent searched={this.state.searched} handleChange={this.handleChange}/>
        </div>
        <button onClick={this.handleClick}>button </button>
        {
          (filteredRobot.length) ?
            <WraperComponent>
              <ArrayCardComponent Robots={filteredRobot}/>
            </WraperComponent>
            :
            <>
              <div className='flex flex-wrap'>
                <div className='card bg-silver'>
                    <h3>------</h3>
                    <p>------</p>
                    <div>----------------</div>
                </div>
                <div className='card bg-silver'>
                    <h3>------</h3>
                    <p>------</p>
                    <div>----------------</div>
                </div>
                <div className='card bg-silver'>
                    <h3>------</h3>
                    <p>------</p>
                    <div>----------------</div>
                </div>
                <div className='card bg-silver'>
                    <h3>------</h3>
                    <p>------</p>
                    <div>----------------</div>
                </div>
              </div>
            </>

        }

        {/* {

           (filteredRobot.length)  ?
           <Wrapper> */}
           {/* </Wrapper>
                  :
                <h1>loading....</h1> */}
                     
        {/* } */}
      </>
      
  
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




