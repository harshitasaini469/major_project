import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "mapbox-gl-geocoder";

const Map = ({ center }) => {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    // Replace 'YOUR_ACCESS_TOKEN' with your Mapbox access token
    mapboxgl.accessToken =
      "pk.eyJ1IjoiaGFyc2hpdGExOTAxIiwiYSI6ImNsbXo1bDV4azBrM3Yyam56bmgxY3Jjc2oifQ.fq-XEQEfLYVOsnhPC0Ye5w";

    if (!mapInstanceRef.current) {
      // Create a new map instance if it doesn't exist
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: center || [78.9629, 20.5937],
        zoom: 4,
      });

      // Add navigation control for zooming
      map.addControl(new mapboxgl.NavigationControl(), "top-left");

      new mapboxgl.Marker().setLngLat(center).addTo(map);

      // const geocoder = new MapboxGeocoder({
      //   accessToken: mapboxgl.accessToken,
      //   mapboxgl: mapboxgl,
      // });
      
      // map.addControl(geocoder, "top-right");

      // Store the map instance in a ref to access it later for updates
      mapInstanceRef.current = map;
    } else {
      // If the map instance already exists, just update the center
      mapInstanceRef.current.setCenter(center);
    }

    // Cleanup the map instance to prevent memory leaks
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [center]);

  return <div ref={mapContainerRef} className="w-[500px] h-[450px]" />;
};

export default Map;
