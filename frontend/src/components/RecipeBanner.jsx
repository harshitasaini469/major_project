import React from 'react'

const RecipeBanner = () => {
  return (
    <div className='flex flex-col gap-2'>
        <p className='h3'>Millet Recipe Recommendation System</p>
        <div class="card text-bg-dark">
    <img src="./images/dish.png" class="card-img" alt="..."/>
    <div class="card-img-overlay flex items-center">
      <div className='p-3 w-1/3 border rounded-md flex flex-col gap-3 bg-white/30 backdrop-blur-sm'>
        <p className='text-4xl font-semibold '>Explore a world of millet dishes based on your taste and dietary needs.</p>
        <p className='text-md '>Join the Millet Movement: Discover & Share Delicious Recipes!</p>
      </div>
    </div>
  </div>
    </div>
  )
}

export default RecipeBanner
