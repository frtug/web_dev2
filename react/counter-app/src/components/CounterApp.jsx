import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement } from '../feature/counter/counter.slice'
export default function CounterApp() {
    const value = useSelector(state => state.counter.value)
    const dispatch = useDispatch();
    console.log(value)
  return (
    <div className='mx-auto px-2 bg-gray-100'>
        <h1>Counter APP</h1>
        <div>
            <button onClick={()=>dispatch(decrement())}>-</button>
            <h3>{value}</h3>
            <button onClick={()=>dispatch(increment())}>+</button>
        </div>
       
    </div>
  )
}
