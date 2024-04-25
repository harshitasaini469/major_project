import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Prediction from "./Pages/Prediction";
import Recipe from "./Pages/Recipe";
import { MilletProvider } from "./context/MilletContext";
import AndhraPradesh from "./Pages/AndhraPradesh";
function App() {
  return (
    <div className="App font-roboto flex flex-col justify-between h-screen">
      <Router>
        <Header />
        <MilletProvider>
          <Routes>
            <Route>
              <Route path="/" index element={<Home />} />
              <Route path="/prediction" element={<Prediction />} />
              <Route path="/recipe" element={<Recipe />} />
              <Route path="/about" element={<AndhraPradesh />} />
            </Route>
          </Routes>
        </MilletProvider>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
