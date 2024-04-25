import React from 'react'
import '../assets/map.css'
const PredictionBanner = () => {
  return (
    <div className='container p-5 h-44 '>
         <div className='p-5 border-4 gradient-border rounded-lg flex justify-center z-10 relative '>
      <div className='text-center z-20 absolute bg-white p-3 '>
        <p className='h1 font-semibold'>Predict Your Ideal Millet Variety</p>
        <p className='text-lg'>AI-powered recommendations for a thriving harvest and sustainable future.</p>
      </div>
    </div>
    </div>
   
  )
}

export default PredictionBanner
