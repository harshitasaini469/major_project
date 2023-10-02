import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "mapbox-gl-geocoder";

function GeocoderComponent() {
  // Set your Mapbox access token here
  mapboxgl.accessToken =
    "pk.eyJ1IjoiaGFyc2hpdGExOTAxIiwiYSI6ImNsbXo1bDV4azBrM3Yyam56bmgxY3Jjc2oifQ.fq-XEQEfLYVOsnhPC0Ye5w";
  // Create a reference to the geocoder container
  const geocoderContainerRef = useRef(null);
  const geocoderRef = useRef(null);

  // Initialize the geocoder control
  useEffect(() => {
    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
    });

    // Add the geocoder control to the container
    geocoderRef.current = geocoder;
    geocoderContainerRef.current.appendChild(geocoder.onAdd());

    return () => {
      // Cleanup the geocoder control when the component unmounts
      if (geocoderRef.current) {
        geocoderRef.current.onRemove();
      }
    };
  }, []);

  return <div ref={geocoderContainerRef} />;
}

export default GeocoderComponent;
