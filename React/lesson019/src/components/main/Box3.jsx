import React, { useReducer, useState } from 'react'

const Box3 = () => {
   const [value, func] = useReducer((state, action)=> state + action, 0)
   const [count, setCount] = useState(0)

  return (
    <div>
        <h2>Box3 {value}</h2>
        <button onClick={() => func(1)}>increment</button>
        <button onClick={() => func(10)}>increment</button>

        <h2>Box3 {count}</h2>
        <button onClick={()=> setCount(p => p + 1)}>increment</button>
        <button onClick={()=> setCount(p => p + 10)}>increment</button>
    </div>
  )
}

export default Box3