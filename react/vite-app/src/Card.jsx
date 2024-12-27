import React from 'react'

// "https://robohash.org/greesdfsdfn?size=200x200"
export default function Card(props){
    return(
        <div className='card'>
            <h3>{props.name}</h3>
            <p>{props.des}</p>
            <img src={"https://robohash.org/"+props.des+"?size=200x200"} alt={props.name} />
        </div>
    )
}



export function ArrayCardComponent(props){
    const cardComponent = props.Robots.map((item,i) =>{
        return (
          <Card key={i} name={item.name} des={"Greendkjfsd"+item.email}  />
        )
      }
    )
    return (
      <div className='flex flex-wrap'>
      {cardComponent}
    </div>
    )
  }