import React from 'react'
import {Link, useMatch, useNavigate, useResolvedPath, useSearchParams} from 'react-router'

export function LinkHelper({children,className,...props}) {
    const resolvedPath = useResolvedPath(props.to)
    console.log(resolvedPath.pathname)
    const isActive = useMatch({path:resolvedPath.pathname,end:true})

    let [searchParams] = useSearchParams();

    console.log(searchParams.get("sort"))
    return (
    <Link  className={`border-b-4  p-2 border-indigo-500 mr-1 ${className} ${isActive ? "bg-gray-500":""}` } {...props}>
        {children}
    </Link>
  )
}

// ? 
// https://google.com/dashboard/search?key=value 

// &, =
// https://google.com/search?key=value&sort=asc&limit=10

// # anchor linking to the same web page
// https://google.com/#profile

// "/ "


// Product Section 
// add the date in the single array of Object
// Calousou Flash sales or something
// products which we are selling. -> Card Manner -> Image, Title, short des. with price, Add to Card Button, 
// Pick your niche, Maybe like amazon or like a myntra, Tools, Cups, Printed Shirts

// create Order section ,-> All the order which we have ordered. 
// 
//  and Profile -> Chnage Profile, Addresses, Payment info.
