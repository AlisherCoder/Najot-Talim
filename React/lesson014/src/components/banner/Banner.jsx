import React from 'react'

const Banner = ({children, bg, image}) => {
  return (
    <div style={{background:`url(${image}) no-repeat center/cover`}} className={`w-full h-[500px]  text-center pt-14 mb-2`}>
        {children}
    </div>
  )
}

export default Banner