import React from "react";
import { mapboxgl } from "mapbox-gl";
import ReactMapGl, {
  FullscreenControl,
  Marker,
  NavigationControl,
} from "react-map-gl";
import { useState } from "react";
import RoomIcon from "@mui/icons-material/Room";
import Header from "./Header";
import Footer from "./Footer";
import LocationInput from "./LocationInput";
import GeocoderComponent from "./GeocoderComponent";


const MapBox = () => {
  const [newPlace, setNewPlace] = useState(null);
  const [viewPort, setViewPort] = useState({
    latitude: 20.5937,
    longitude: 78.9629,
    zoom: 3.2,
  });
  // const [markerLocation, setMarkerLocation] = useState(null);

  // const handleGeocoderResult = (result) => {
  //   const [longitude, latitude] = result.result.center;
  //   setMarkerLocation({ latitude, longitude });
  //   setViewPort({
  //     ...viewPort,
  //     latitude,
  //     longitude,
  //   });
  // };
  return (
  
    <div className="flex flex-col sm:flex-row justify-evenly ">
        <div className="flex flex-col justify-center  space-y-5 w-2/5">
          <p className="text-5xl font-bold">Welcome to OptiMillet</p>
          <p className="text-lg text-gray-700 font-semibold">
            Please input the location or locate on the map to get the millet
            crop recommendation
          </p>
          {/* <LocationInput/> */}
          <GeocoderComponent/>

        </div>
        <div className="flex justify-center items-center w-2/5">
        <div className="w-[500px] h-[450px]">
      <ReactMapGl
        {...viewPort}
        mapboxAccessToken={"pk.eyJ1IjoiaGFyc2hpdGExOTAxIiwiYSI6ImNsbXo1bDV4azBrM3Yyam56bmgxY3Jjc2oifQ.fq-XEQEfLYVOsnhPC0Ye5w"}
        width="100%"
        height="100%"
        transitionDuration="200"
        mapStyle="mapbox://styles/mapbox/satellite-streets-v12"
        onViewPortChange={(viewPort) => setViewPort(viewPort)}
      >
        <NavigationControl />
        <FullscreenControl />
        
        
      </ReactMapGl>
    </div>
        </div>
      </div>
    
  );
};

export default MapBox;
