import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import FileSaver from "file-saver";
import * as turf from "@turf/turf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Oval } from "react-loader-spinner";

const Map = ({ center }) => {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const geocoderRef = useRef(null);
  const geocoderContainerRef = useRef(null);
  const markerRef = useRef(null);
  const [show, setShow] = useState(false);
  const [isRecommendEnabled, setRecommendEnabled] = useState(false);
  const [isResetEnabled, setResetEnabled] = useState(false);
  const [drawnPolygon, setDrawnPolygon] = useState(null);
  const [endDate, setEndDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [recommendedMillet, setRecommendedMillet] = useState(null);
  const [loading, setLoading] = useState(false);
  const millets = [
    "Bajra",
    "Ragi",
    "Jowar",
    "Kangni",
    "Kutki",
    "Cheena",
    "Jhangora",
    "Kodon",
    "Korle",
    "Moongil Arisi",
  ];

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiaGFyc2hpdGExOTAxIiwiYSI6ImNsbXo1bDV4azBrM3Yyam56bmgxY3Jjc2oifQ.fq-XEQEfLYVOsnhPC0Ye5w";
    if (!mapInstanceRef.current) {
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/mapbox/satellite-streets-v12",
        center: center || [78.9629, 20.5937],
        zoom: 3,
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
        const bbox = e.result.bbox;
        // Convert the bounding box to a GeoJSON polygon using @turf/turf
        const bboxPolygon = turf.bboxPolygon(bbox);

        // Set the GeoJSON object to state
        setDrawnPolygon(bboxPolygon.geometry);

        map.addLayer({
          id: "rectangle",
          type: "fill",
          source: {
            type: "geojson",
            data: {
              type: "Feature",
              geometry: {
                type: "Polygon",
                coordinates: [
                  [
                    [bbox[0], bbox[1]],
                    [bbox[2], bbox[1]],
                    [bbox[2], bbox[3]],
                    [bbox[0], bbox[3]],
                    [bbox[0], bbox[1]], // Close the polygon
                  ],
                ],
              },
            },
          },
          layout: {},
          paint: {
            "fill-color": "#088",
            "fill-opacity": 0.3,
          },
        });

        // Set the drawn polygon for download
        setDrawnPolygon({
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: [
              [
                [bbox[0], bbox[1]],
                [bbox[2], bbox[1]],
                [bbox[2], bbox[3]],
                [bbox[0], bbox[3]],
                [bbox[0], bbox[1]], // Close the polygon
              ],
            ],
          },
        });
      });

      geocoder.on("clear", () => {
        // Disable recommend button when the geocoder is cleared
        setRecommendEnabled(false);
        // Remove the polygon layer from the map
        if (map.getLayer("rectangle")) {
          map.removeLayer("rectangle");
          map.removeSource("rectangle");
        }
        setDrawnPolygon(null);
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
      if (geocoderContainerRef.current&& geocoderContainerRef.current.firstChild) {
        geocoderContainerRef.current.firstChild.remove();
      }
    };
  }, [center]);
  const handleDownload = () => {
    if (drawnPolygon) {
      const geojsonContent = JSON.stringify({
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            properties: {},
            geometry: drawnPolygon.geometry,
          },
        ],
      });
      console.log(drawnPolygon.geometry.coordinates);
      console.log(geojsonContent);

      const blob = new Blob([geojsonContent], { type: "application/json" });
      FileSaver.saveAs(blob, "drawn_polygon.geojson");
    }
  };

  const handleReset = () => {
    // Reset the content inside the geocoder
    geocoderRef.current.clear();
    setResetEnabled(false);
    setRecommendEnabled(false);
    setShow(false);
    window.location.reload();
  };

  const handleRecommend = () => {
    // Show loading indicator
    setLoading(true);

    // Simulate a recommendation process after a delay (e.g., 2 seconds)
    setTimeout(() => {
      // Set a recommended millet after the delay
      setRecommendedMillet(millets[Math.floor(Math.random() * millets.length)]);
      setLoading(false); // Hide loading indicator
      setShow(true);
    }, 2000);
  };

  return (
    <div className="flex flex-col md:flex-row  gap-4 justify-evenly p-2">
      <div className="flex flex-col justify-center space-y-5 md:w-2/5">
        <p className="text-2xl sm:text-3xl md:text-5xl font-bold">
          Welcome to OptiMillet
        </p>
        <p className="text-md md:text-lg text-gray-700 font-semibold">
          Please input the location or locate on the map to get the millet crop
          recommendation
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <div ref={geocoderContainerRef} id="geocoder" />
          <div className="flex flex-row gap-2">
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
            {drawnPolygon && (
              <button
                className={
                  "bg-green-700 px-2 py-1 rounded-lg text-white w-fit "
                }
                onClick={handleDownload}
                disabled={!isRecommendEnabled}
              >
                <FontAwesomeIcon icon={faDownload} />
              </button>
            )}
          </div>
        </div>
        <div className="flex flex-wrap items-center  gap-4">
          <div className="flex flex-col gap-1">
            {" "}
            <label htmlFor="start-date">Start date</label>
            <input
              type="date"
              id="start-date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="border border-black rounded-md  px-2"
            />
          </div>
          <div className="flex flex-col gap-1">
            {" "}
            <label htmlFor="end-date">End date</label>
            <input
              type="date"
              id="end-date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="border border-black rounded-md  px-2"
            />
          </div>
        </div>{" "}
        {loading && (
          <Oval
            visible={true}
            height="50"
            width="50"
            ariaLabel="discuss-loading"
            wrapperStyle={{}}
            wrapperClass="discuss-wrapper"
            color="black"
            backgroundColor="#F4442E"
          />
        )}
        {show && (
          <div className="w-fit h-fit">
            <p className="font-medium">
              Based on the location input, the suitable millet crop for weather
              and soil condition is
              <span className="text-green-500 font-semibold mx-1 text-lg">
                {recommendedMillet}
              </span>
            </p>
          </div>
        )}
      </div>
      <div className="flex justify-center items-center md:w-2/5">
        <div ref={mapContainerRef} className="w-[600px] h-[450px]" />
      </div>
    </div>
  );
};

export default Map;
