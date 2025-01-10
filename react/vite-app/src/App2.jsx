import { useEffect, useState } from "react"
import { ArrayCardComponent } from "./Card"
import Header from "./Header"
import SearchedComponent from "./SearchedComponent"
import './App.css'

function App(){

    const [searched,setSearched] = useState("") // value,setvalue
    const [robots,setRobots] = useState([]) // value,setvalue
    const [filteredRobots,setFilteredRobots] = useState(robots) // value,setvalue

    console.log("Its function app")
    
    useEffect(()=>{
        console.log("effect called1")
        fetch('https://jsonplaceholder.typicode.com/users').then(
            (res)=> res.json()).then(data=> {setRobots(data)})  
    },[])
    // fetch('https://jsonplaceholder.typicode.com/users').then(
    //     (res)=> res.json()).then(data=> {setRobots(data)}) 
    useEffect(()=>{
        console.log("effect called2")
        const newFilteredRobots =robots.filter((item)=>{
            return item.name.toLowerCase().includes(searched)
          })
        setFilteredRobots(newFilteredRobots)

    },[searched,robots])

    const handleChange = (e)=> {
        let search = e.target.value
        console.log("input value ",search)
        setSearched(search)
        console.log("seached value from this state",searched) 
        // let filteredRobot = robots.filter((item)=>{
        //     return item.name.toLowerCase().includes(searched)
        //   })
        // setFilteredRobots(filteredRobot)
      }
    return(
      <>
              <div> 
                  {/* <h1 className='font-roboto hr'>ROBOT GAME <span> {this.props.msg}</span></h1> */}
                  <Header msg={"This is functional Component"}/>
                  <SearchedComponent searched={searched} handleChange={handleChange}/>
              </div>
              {
                (filteredRobots.length) ?
                    <ArrayCardComponent Robots={filteredRobots}/>
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
                </>
    )
  }

export default App