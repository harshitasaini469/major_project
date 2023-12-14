import React from 'react'

const Header = () => {
  return (
    <nav className="bg-green-600 h-20 flex gap-3 items-center  pl-5 ">
      <img src="./logo.png" alt="" className='w-14 h-14'/>
        <p className="text-white font-semibold text-2xl  ">OptiMillet</p>
      </nav>
  )
}

export default Header;

