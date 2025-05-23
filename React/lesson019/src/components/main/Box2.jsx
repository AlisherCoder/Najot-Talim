import React, {useContext} from 'react'
import { Context } from './Main';
import Box3 from './Box3';

const Box2 = () => {
  const {setState} = useContext(Context)
  
  return (
    <div>
      <h2>Box2</h2>
      <Box3/>
    </div>
  )
}

export default Box2