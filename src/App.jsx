import React, { useEffect, useState } from "react";
import StateComponent from "./components/StateComponent";
import CityComponent from "./components/CityComponent";
import Map from "./components/Map";
import convertCityToCoordinates from "./components/geocoding";

function App() {
  const [stateCode, setStateCode] = useState("");
  const [city, setCity] = useState("");
  const [coordinates, setCoordinates] = useState([78.9629, 22.5937]);
  console.log(coordinates);

  const handleStateChange = (newState) => {
    setStateCode(newState);
    console.log(stateCode);
  };
  const handleCityChange = (newCity) => {
    setCity(newCity);
    console.log(city);
  };
  const handleSearch = async () => {
    try {
      const result = await convertCityToCoordinates(city);

      if (result) {
        setCoordinates(result);
      } else {
        console.error("City not found or error occurred during conversion.");
      }
    } catch (error) {
      console.error("Error converting city to coordinates:", error);
    }
  };
  return (
    <div className="App font-serif flex flex-col justify-between h-screen">
      <nav className="bg-green-600 h-20 flex  items-center">
        <p className="text-white font-semibold text-2xl  ml-32 ">OptiMillet</p>
      </nav>
      <div className="flex justify-evenly ">
        <div className="flex flex-col justify-center  space-y-5 w-2/5">
          <p className="text-5xl font-bold">Welcome to OptiMillet</p>
          <p className="text-lg text-gray-700 font-semibold">
            Please input the location or locate on the map to get the millet
            crop recommendation
          </p>
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              className="focus:outline-none  border-2 border-black rounded-md px-2 w-80 py-1 "
              placeholder="input location"
            />
            <div className="flex space-x-4">
              <button className={`bg-green-600 p-2 rounded-lg text-white`}>
                Recommend
              </button>
              <button className={`bg-green-600 p-2 rounded-lg text-white`}>
                Reset
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-2/5">
          <Map center={coordinates} />
        </div>
      </div>
      <footer className="flex justify-around items-center text-lg h-16 justify-self-end bg-lime-200 text-gray-700">
        <p>Team OptiMillet</p>
        <p className="space-x-2">
          <span>Radhika aggarwal</span>
          <span>|</span>
          <span>Sanya Rao</span>
          <span>|</span>
          <span>Harshita</span>
        </p>
        <p>2023</p>
      </footer>
    </div>
  );
}

export default App;
