import React, { useEffect, useState } from "react";
import StateComponent from './components/StateComponent'
import CityComponent from './components/CityComponent'
import Map from "./components/Map";
import convertCityToCoordinates from './components/geocoding';

function App() {
  const [stateCode, setStateCode] = useState('');
  const [city,setCity]=useState('')
  const [coordinates, setCoordinates] = useState([78.9629, 22.5937]);
  console.log(coordinates)

  const handleStateChange = (newState) => {
    setStateCode(newState);
    console.log(stateCode)
  };
  const handleCityChange=(newCity)=>{
    setCity(newCity)
    console.log(city)
  }
  const handleSearch = async () => {
    try {
    
      const result = await convertCityToCoordinates(city); 

      if (result) {
        setCoordinates(result);
      } else {
        console.error('City not found or error occurred during conversion.');
      }
    } catch (error) {
      console.error('Error converting city to coordinates:', error);
    }
  };
  return (
    <div className="App">
      <div className="App flex flex-col  items-center justify-center  h-[100%] font-serif">
      <p className="text-2xl p-5">OptiMillet</p>
      <div className="flex justify-center  w-full border p-2">
      {/* <div className="flex flex-col justify-center gap-4 items-center w-[45%]  text-lg">
      <StateComponent handleStateChange={handleStateChange} />
      <CityComponent stateCode={stateCode} handleCityChange={handleCityChange} />
      <button onClick={handleSearch}>Search</button>
      </div> */}
      <div className="flex justify-center  ">
        <Map center={coordinates}/>
      </div>
      </div>
    
     
    </div>
    </div>
  );
}

export default App;
