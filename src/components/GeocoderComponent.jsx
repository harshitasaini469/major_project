import React, { useEffect ,useRef} from "react";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css"; // Import the CSS

const GeocoderComponent = ({ mapInstance }) => {

  const geocoderContainerRef = useRef(null);
  const geocoderRef = useRef(null);

    useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiaGFyc2hpdGExOTAxIiwiYSI6ImNsbXo1bDV4azBrM3Yyam56bmgxY3Jjc2oifQ.fq-XEQEfLYVOsnhPC0Ye5w";
      if ( !geocoderRef.current) {
        // Create a Mapbox Geocoder instance
      const geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
      });
      
      geocoder.onAdd(mapInstance);

    // Store the Geocoder control in the geocoderRef
        geocoderRef.current = geocoder;

    // Attach the Geocoder control to the geocoderContainerRef div
        geocoderContainerRef.current.appendChild(geocoder.onAdd(mapInstance));
        const results = document.getElementById("result");

    geocoder.on("result", (e) => {
      results.innerText = JSON.stringify(e.result, null, 2);
    });

    geocoder.on("clear", () => {
      results.innerText = "";
    });

    }

  }, [mapInstance]);

  return (
    <div>
      <div ref={geocoderContainerRef} id="geocoder" className="geocoder" />
      <div id="result"></div>
          </div>
  );
};

export default GeocoderComponent;
