import React from 'react'

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row text-md gap-2 p-4 capitalize  justify-self-end  text-gray-700 shadow-lg shadow-t-5">
    <p className='text-lg text-green-600'>Team MilletScape</p>
    <div className="flex flex-col md:flex-row items-center self-center space-x-2 mx-auto">
      <span>Radhika aggarwal</span>
      <span>|</span>
      <span>Sanya Rao</span>
      <span>|</span>
      <span>Harshita</span>
    </div>
  </footer>
  )
}

export default Footer
