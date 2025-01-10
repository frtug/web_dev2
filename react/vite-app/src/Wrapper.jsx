// import React from 'react'


export default function Wrapper(props) {
    const h = false;
        return ( 
            <div className="pa4">
                {
                    (h) ?
                    <div className="bg-gold">{props.children}</div>
                    :
                    <div className="bg-light-red">{props.children}</div>


                }
            </div>

        )
    }
    
 

