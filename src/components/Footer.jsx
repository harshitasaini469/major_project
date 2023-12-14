import React from 'react'

const Footer = () => {
  return (
    <footer className="flex justify-around items-center flex-col md:flex-row text-md gap-2 p-3 capitalize  justify-self-end bg-lime-200 text-gray-700">
    <p className='text-lg'>Team OptiMillet</p>
    <p className="flex flex-col md:flex-row  items-center space-x-2">
      <span>Radhika aggarwal</span>
      <span>|</span>
      <span>Sanya Rao</span>
      <span>|</span>
      <span>Harshita</span>
    </p>
    <p>2023</p>
  </footer>
  )
}

export default Footer
