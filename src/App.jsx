import React, { useEffect, useState } from "react";
import Map from "./components/Map";
import mapboxgl from "mapbox-gl";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LocationInput from "./components/LocationInput";
import MapBox from "./components/MapBox";
function App() {
  const [city, setCity] = useState("");
  const [coordinates, setCoordinates] = useState([78.9629, 22.5937]);
  const [selectedLocation, setSelectedLocation] = useState(null);

  console.log(coordinates);

  return (
    <div className="App font-poppins flex flex-col justify-between h-screen">
      <Header/>
          <Map center={coordinates} />
      <Footer/>
    </div>
  );
}

export default App;
