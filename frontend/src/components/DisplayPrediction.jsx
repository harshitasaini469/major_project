import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MilletContext } from '../context/MilletContext'

const DisplayPrediction = () => {
    const {predictedMillet}=useContext(MilletContext)
  return (
    <div>
        {predictedMillet ? (<div className="flex flex-col gap-4">
              <div className="w-fit h-fit">
                <p className="font-medium">
        
                    <span>
                      Based on the location input, the suitable millet crop for
                      soil and climate condition is :
                    </span>
            {" "}
                  <br />
                  <span className="text-green-500 font-semibold mx-1 text-3xl">
                    {predictedMillet.en} or {predictedMillet.enHindi}
                  </span>
                </p>
              </div>
            
                <div className="flex flex-col gap-3">
                  <Link to="/recipe">
                    {" "}
                    <button className="text-green-700 flex items-center gap-3">
                      Click here to try out recipes for the recommended millet{" "}
                      <span className="font-semibold  text-2xl">&gt;</span>{" "}
                    </button>
                  </Link>
                  <div className=" p-2 shadow-md flex gap-5 items-center justify-center ">
                    <img
                      src={`./images/${predictedMillet.enHindi}.jpeg`}
                      alt=""
                      className="w-44 "
                    />
                    <img
                      src={`./images/${predictedMillet.enHindi}1.jpeg`}
                      alt=""
                      className="w-44"
                    />
                  </div>
                </div>
            
            </div>): (<div className='text-green-500 font-semibold mx-1 text-3xl'>
                <p>Failed to fetch Recommendation</p>
            </div>)}
      
    </div>
  )
}

export default DisplayPrediction
