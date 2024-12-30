import React from 'react'
import { Children } from 'react'

export default function SearchedComponent({searched,handleChange}){
      return(
        <>
          {/* <h1>{Children}</h1> */}
                <input type="text" placeholder='Search Robot' className='pa2' value={searched} onChange={handleChange}/>

        </>
      )
}

