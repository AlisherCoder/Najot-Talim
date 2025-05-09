import React from 'react'

const Hero = () => {
  
  return (
    <section className='w-full h-[500px] border bg-[url(./assets/hero.png)] bg-no-repeat bg-center bg-cover flex items-center justify-center text-center text-white'>
      <div>
        <h1 className='text-[50px] max-[700px]:text-4xl  max-[500px]:text-3xl'>Let's do it together.</h1>
        <p className='mt-5 mb-7 opacity-60'>We travel the world in search of stories. Come along for the ride.</p>
        <button className='bg-primary py-3 px-8 rounded-[3px]'>View Latest Posts</button>
      </div>
    </section>
  )
}

export default Hero