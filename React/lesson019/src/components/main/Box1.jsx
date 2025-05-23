import React, { useContext } from 'react'
import Box2 from './Box2'
import { Context } from './Main'

const Box1 = () => {
   const {state} = useContext(Context)
  return (
    <div>
        <h2>Box1</h2>
        <Box2 />
    </div>
  )
}

export default Box1