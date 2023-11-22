import React, { useState } from "react";
import MapboxGeocoder from "mapbox-gl-geocoder";
import GeocoderComponent from "./GeocoderComponent";

const LocationInput = () => {
  const [city, setCity] = useState("");
  const [show, setShow] = useState(false);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  return (
    <div className="flex flex-col space-y-4">
      <input
        type="text"
        className="focus:outline-none  border-2 border-black rounded-md px-2 w-80 py-1 "
        placeholder="input location"
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
          setIsButtonEnabled(!!e.target.value); // Enable the button if there's input
        }}
      />
      <div className="flex space-x-4">
        <button
          className={` p-2 rounded-lg text-white ${
            isButtonEnabled ? "bg-green-600" : "bg-gray-500"
          }`}
          disabled={!isButtonEnabled}
          onClick={() => setShow(true)}
        >
          Recommend
        </button>
        <button
          className={`bg-green-600 p-2 rounded-lg text-white ${
            isButtonEnabled ? "bg-green-600" : "bg-gray-500"
          }`}
          onClick={() => {
            setCity("");
            setIsButtonEnabled(false);
            setShow(false);
          }}
          disabled={!isButtonEnabled}
        >
          Reset
        </button>
      </div>
      {show && (

      <div className="w-fit h-fit">
          <p className="font-medium">
            Based on the location input, the suitable millet crop for weather
            and soil condition is
            <span className="text-green-500 font-semibold mx-1 text-lg">BAJRA</span>
          </p>
      </div>
              )}

    </div>
  );
};

export default LocationInput;
