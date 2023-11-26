import React, { useEffect, useState } from "react";
import Map from "./components/Map";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  const [coordinates, setCoordinates] = useState([78.9629, 22.5937]);

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
