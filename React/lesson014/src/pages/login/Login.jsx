import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h2>Login</h2>
      <button onClick={()=> navigate("/")}>Go home</button>
      <button onClick={()=> navigate(-1)}>Go back</button>
    </div>
  )
}

export default Login