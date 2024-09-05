import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
const MyComponent = () => {
    const count = useSelector((state)=>state.state);
    const dispatch = useDispatch();
  return (
    <>
    <div>{count}</div>
    <div>
        <button onClick={()=>dispatch({type:"Increment"})}>Increment</button>
        <button onClick={()=>dispatch({type:"Decrement"})}>Decrement</button>
    </div>
    </>
  )
}

export default MyComponent