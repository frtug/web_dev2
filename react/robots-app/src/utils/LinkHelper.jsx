import React from 'react'
import {Link} from 'react-router'

export function LinkHelper({children,to,className}) {
  return (
    <Link to={to} className={`border-b-4 p-1 border-indigo-500 mr-1 ${className}`}>
        {children}
    </Link>
  )
}
