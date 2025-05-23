import React, {createContext, useState} from 'react'
import Box1 from './Box1'
 
export const Context = createContext()

const Main = () => {
    let data = [1,2,3]
    const [state, setState] = useState(null)
  return (
    <div>
        <h2>Main</h2>
        <Context.Provider value={{data, title:"hello", setState, state}}>
            <Box1/>
        </Context.Provider>
        

    </div>
  )
}

export default Main