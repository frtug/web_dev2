import React from 'react'

export default function Header(props) {
  return (
    <h1 className='font-roboto hr'>ROBOT GAME <span> {props.msg}</span></h1>
)
}
