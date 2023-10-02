import React, { useEffect, useState } from "react";

import Map from "./components/Map";
import convertCityToCoordinates from "./components/geocoding";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "mapbox-gl-geocoder";

import "mapbox-gl/dist/mapbox-gl.css";
import "mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LocationInput from "./components/LocationInput";
function App() {
  // const [stateCode, setStateCode] = useState("");
  const [city, setCity] = useState("");
  const [coordinates, setCoordinates] = useState([78.9629, 22.5937]);
  const [selectedLocation, setSelectedLocation] = useState(null);

  console.log(coordinates);

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
  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiaGFyc2hpdGExOTAxIiwiYSI6ImNsbXo1bDV4azBrM3Yyam56bmgxY3Jjc2oifQ.fq-XEQEfLYVOsnhPC0Ye5w";

    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
    });
  });
  return (
    <div className="App font-serif flex flex-col justify-between h-screen">
      <Header/>
      <div className="flex flex-col sm:flex-row justify-evenly ">
        <div className="flex flex-col justify-center  space-y-5 w-2/5">
          <p className="text-5xl font-bold">Welcome to OptiMillet</p>
          <p className="text-lg text-gray-700 font-semibold">
            Please input the location or locate on the map to get the millet
            crop recommendation
          </p>
          <LocationInput/>
        </div>
        <div className="flex justify-center items-center w-2/5">
          <Map center={coordinates} />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
