import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

const Map = ({ center }) => {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const geocoderRef = useRef(null);
  const geocoderContainerRef = useRef(null);
  const markerRef = useRef(null);
  const [show, setShow] = useState(false);
  const [isRecommendEnabled, setRecommendEnabled] = useState(false);
  const [isResetEnabled, setResetEnabled] = useState(false);
const [polycords,setPolyCords]=useState([])

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiaGFyc2hpdGExOTAxIiwiYSI6ImNsbXo1bDV4azBrM3Yyam56bmgxY3Jjc2oifQ.fq-XEQEfLYVOsnhPC0Ye5w";
    if (!mapInstanceRef.current) {
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/mapbox/satellite-streets-v12",
        center: center || [78.9629, 20.5937],
        zoom: 3.4,
      });

      map.addControl(new mapboxgl.NavigationControl(), "top-left");
      map.addControl(new mapboxgl.FullscreenControl());

      mapInstanceRef.current = map;
      markerRef.current = new mapboxgl.Marker().setLngLat(center).addTo(map);

      const geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
      });

      geocoderRef.current = geocoder;
      geocoderContainerRef.current.appendChild(geocoder.onAdd(map));
      geocoder.on("result", (e) => {
        // Enable recommend button when a valid location is entered
        setRecommendEnabled(true);
        const coordinates = e.result.geometry.coordinates;
        console.log(coordinates);

      });

      geocoder.on("clear", () => {
        // Disable recommend button when the geocoder is cleared
        setRecommendEnabled(false);
      });

      geocoder.on("loading", () => {
        // Enable reset button when geocoder is loading
        setResetEnabled(true);
      });

      geocoder.on("results", (e) => {
        // Enable reset button when geocoder returns results
        setResetEnabled(true);
      });
    } else {
      mapInstanceRef.current.setCenter(center);
    }
    // Cleanup the map instance to prevent memory leaks
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
      if (geocoderContainerRef.current.firstChild) {
        geocoderContainerRef.current.firstChild.remove();
      }
    };
  }, [center]);
  const handleReset = () => {
    // Reset the content inside the geocoder
    geocoderRef.current.clear();
    setResetEnabled(false);
    setRecommendEnabled(false);
    setShow(false);
  };

  const handleRecommend = () => {
    // Handle recommend button click
    setShow(true);
  };
  return (
    <div className="flex flex-col sm:flex-row justify-evenly">
      <div className="flex flex-col justify-center space-y-5 w-2/5">
        <p className="text-5xl font-bold">Welcome to OptiMillet</p>
        <p className="text-lg text-gray-700 font-semibold">
          Please input the location or locate on the map to get the millet crop
          recommendation
        </p>
        <div className="flex flex-row items-center gap-3">
          <div ref={geocoderContainerRef} id="geocoder" />
          <button
            className={`${
              isResetEnabled ? "bg-green-700" : "bg-gray-400"
            } p-2 rounded-lg text-white h-fit`}
            onClick={handleReset}
            disabled={!isResetEnabled}
          >
            Reset
          </button>
          <button
            className={`${
              isRecommendEnabled ? "bg-green-700" : "bg-gray-400"
            } p-2 rounded-lg text-white h-fit`}
            onClick={handleRecommend}
            disabled={!isRecommendEnabled}
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
      <div className="flex justify-center items-center w-2/5">
        <div ref={mapContainerRef} className="w-[600px] h-[450px]" />
      </div>
    </div>
  );
};

export default Map;
