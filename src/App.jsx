import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Map from "./components/Map";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutUs from "./Pages/AboutUs";
import Benefits from "./Pages/Benefits";
function App() {
  const [coordinates, setCoordinates] = useState([78.9629, 22.5937]);
  return (
    <div className="App font-poppins flex flex-col justify-between h-screen">
      <Router>
        <Header />
        <Routes>
          <Route>
            <Route path="/" index element={<Map center={coordinates} />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/benefits" element={<Benefits/>}/>
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
