import React, {useState, useRef} from 'react'

console.log("outside render");

const Footer = () => {
  const title = useRef(null)
  const lorem = useRef(null) // return {current: null}
  const [count, setCount] = useState(1) // return []
  const [show, setShow] = useState(false)

  console.log("inside render");
  const handleClick = ()=>{
    console.log(title.current);
    title.current.style.color = "red"
  }

  const handleIncrement = ()=>{
    // setCount(count + 1)
    setCount((prev)=> prev + 1)
  }
  
  return (
    <div >
      <h2 ref={title}>Footer</h2>
      <button ref={lorem} onClick={handleClick}>click</button>

      <h1>{ count }</h1>
      <button onClick={handleIncrement}>increment</button>
      <button className='bg-amber-400' onClick={()=> setShow(prev => !prev)}>{show ? "Less" : "Show more"}</button>
      {
        show &&
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus tempore reiciendis natus perspiciatis magnam nemo corporis, minima in ducimus eaque et. Asperiores porro ipsum doloribus dolorem. Atque odit sit debitis!</p>
      }
      <div className={`fixed top-0 ${show ? "right-0" : "-right-[200px]"} w-[200px] h-screen bg-blue-500 duration-300 `}></div>
    </div>
  )
}

export default Footer