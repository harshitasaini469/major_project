import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import { useState } from "react";

const GeocoderComponent = ({ mapInstance }) => {
  const geocoderContainerRef = useRef(null);
  const geocoderRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiaGFyc2hpdGExOTAxIiwiYSI6ImNsbXo1bDV4azBrM3Yyam56bmgxY3Jjc2oifQ.fq-XEQEfLYVOsnhPC0Ye5w";
      // Create a Mapbox Geocoder instance
      const geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
      });
      
      // map.addControl(geocoder, "top-right");
      geocoderRef.current=geocoder;
      geocoderContainerRef.current.appendChild(geocoder.onAdd(mapInstance))
    
  }, [mapInstance]);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-3">
      <div ref={geocoderContainerRef} id="geocoder" className="geocoder" />
      <button
        className="p-2 text-white bg-green-700 rounded-lg"
        onClick={() => setShow(!show)}
      >
        Recommend
      </button>
      </div>
    
      {show && (
        <div className="w-fit h-fit">
          <p className="font-medium">
            Based on the location input, the suitable millet crop for weather
            and soil condition is
            <span className="text-green-500 font-semibold mx-1 text-lg">
              BAJRA
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default GeocoderComponent;
