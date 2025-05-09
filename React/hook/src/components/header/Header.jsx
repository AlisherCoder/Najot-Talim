import React from 'react'

const Header = () => {

  return (
    <header className='absolute w-full'>
      <div className="container mx-auto">
        <nav className='h-[74px] flex items-center justify-between text-white'>
          <div>Escape.</div>
          <ul className='md:flex hidden gap-10 uppercase '>
            <li>
              <a href=""><span>Home</span></a>
            </li>
            <li>
              <a href=""><span>Categories</span></a>
            </li>
            <li>
              <a href=""><span>About</span></a>
            </li>
            <li>
              <a href=""><span>Contact</span></a>
            </li>
          </ul>
          <button className='md:hidden  block  cursor-pointer'>
            <div className='w-8 h-[3px] bg-white mt-[3px] rounded-2xl'></div>
            <div className='w-8 h-[3px] bg-white mt-[3px] rounded-2xl'></div>
            <div className='w-8 h-[3px] bg-white mt-[3px] rounded-2xl'></div>
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header