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
  const polygonLayerRef = useRef(null); // Reference to the polygon layer

  useEffect(() => {
    mapboxgl.accessToken =
            "pk.eyJ1IjoiaGFyc2hpdGExOTAxIiwiYSI6ImNsbXo1bDV4azBrM3Yyam56bmgxY3Jjc2oifQ.fq-XEQEfLYVOsnhPC0Ye5w";
;

    if (!mapInstanceRef.current) {
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/mapbox/satellite-streets-v12",
        center: center || [78.9629, 20.5937],
        zoom: 3.2,
      });

      map.addControl(new mapboxgl.NavigationControl(), "top-left");
      map.addControl(new mapboxgl.FullscreenControl());

      mapInstanceRef.current = map;
      markerRef.current = new mapboxgl.Marker()
        .setLngLat(center)
        .addTo(map);

      const geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
      });

      geocoderRef.current = geocoder;
      geocoderContainerRef.current.appendChild(geocoder.onAdd(map));

      // Add an event listener for the 'result' event
      geocoder.on("result", (e) => {
        // Remove the existing polygon layer if it exists
        if (map.getLayer("polygon-layer")) {
          map.removeLayer("polygon-layer");
          map.removeSource("polygon-source");
        }

        // Store the polygon data
        const polygonData = e.result.geometry;

        // Display the polygon on the map
        map.addSource("polygon-source", {
          type: "geojson",
          data: {
            type: "Feature",
            geometry: polygonData,
          },
        });

        polygonLayerRef.current = {
          id: "polygon-layer",
          type: "fill",
          source: "polygon-source",
          paint: {
            "fill-color": "#FF0000",
            "fill-opacity": 0.8,
          },
        };

        map.addLayer(polygonLayerRef.current);
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
    };
  }, [center]);

  const handleDownloadPolygon = () => {
    // Use polygonLayerRef.current to get the polygon data
    if (polygonLayerRef.current) {
      const polygonData = mapInstanceRef.current.getSource("polygon-source")._data;
      // Convert the polygon data to a downloadable format (e.g., GeoJSON)
      const polygonGeoJSON = {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            geometry: polygonData,
          },
        ],
      };
      const blob = new Blob([JSON.stringify(polygonGeoJSON)], { type: "application/json" });
      const url = URL.createObjectURL(blob);

      // Create a download link and trigger the download
      const a = document.createElement("a");
      a.href = url;
      a.download = "polygon.geojson";
      a.click();

      // Revoke the object URL to free up resources
      URL.revokeObjectURL(url);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row justify-evenly">
      <div className="flex flex-col justify-center space-y-5 w-2/5">
        <p className="text-5xl font-bold">Welcome to OptiMillet</p>
        <p className="text-lg text-gray-700 font-semibold">
          Please input the location or locate on the map to get the millet crop recommendation
        </p>
        <button onClick={handleDownloadPolygon}>Download Polygon</button>
        <div ref={geocoderContainerRef} id="geocoder" />
      </div>
      <div className="flex justify-center items-center w-2/5">
        <div ref={mapContainerRef} className="w-[500px] h-[450px]" />
      </div>
    </div>
  );
};

export default Map;
