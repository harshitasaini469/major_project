import React, { useState } from 'react'
import Map from '../components/Map'
import PredictionBanner from '../components/PredictionBanner';
import RecommendationProcess from '../components/RecommendationProcess';

const Prediction = () => {
    const [coordinates, setCoordinates] = useState([78.9629, 22.5937]);

  return (
    <div className='flex flex-col gap-2 py-4'>
        <PredictionBanner/>
      <Map center={coordinates}/>

      <RecommendationProcess/>
    </div>
  )
}

export default Prediction
