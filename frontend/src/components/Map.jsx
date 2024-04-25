import React, { useContext, useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import FileSaver from "file-saver";
import * as turf from "@turf/turf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Oval } from "react-loader-spinner";
import "../assets/map.css";
import { Link } from "react-router-dom";
import { MilletContext } from "../context/MilletContext";
import milletData from "../milletData";
const Map = ({ center }) => {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const geocoderRef = useRef(null);
  const geocoderContainerRef = useRef(null);
  const markerRef = useRef(null);
  const [show, setShow] = useState(false);
  const [location, setLocation] = useState("");
  const [isRecommendEnabled, setRecommendEnabled] = useState(false);
  const [isResetEnabled, setResetEnabled] = useState(false);
  const [drawnPolygon, setDrawnPolygon] = useState(null);
  const [recommendedMillet, setRecommendedMillet] = useState({
    en: null,
    enHindi: null,
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { setPredictedMillet } = useContext(MilletContext);

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
        console.log("Coordinates:", e.result.geometry.coordinates);

        setRecommendEnabled(true);
        const bbox = e.result.bbox;
        setLocation(e.result.text);
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
    console.log();
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
      if (
        geocoderContainerRef.current &&
        geocoderContainerRef.current.firstChild
      ) {
        geocoderContainerRef.current.firstChild.remove();
      }
    };
  }, [center]);
  useEffect(() => {
    const handleInputChange = () => {
      setShow(false); // Set show to false whenever input changes
    };

    // Check if geocoderRef and inputEl are defined before adding the event listener
    if (geocoderRef.current && geocoderRef.current.inputEl) {
      geocoderRef.current.inputEl.addEventListener("input", handleInputChange);
    }

    // Cleanup: remove event listener when component unmounts or when geocoderRef changes
    return () => {
      if (geocoderRef.current && geocoderRef.current.inputEl) {
        geocoderRef.current.inputEl.removeEventListener(
          "input",
          handleInputChange
        );
      }
    };
  }, [geocoderRef.current]); // Dependency: re-run effect when geocoderRef changes

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

  const handleRecommend = async () => {
    // Show loading indicator

    setLoading(true);
    setShow(false);
    // Simulate a recommendation process after a delay (e.g., 2 seconds)
    setTimeout(async () => {
      // Set a recommended millet after the delay
      try {
        // const response = await fetch("http://127.0.0.1:5000/predict", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({ location }),
        // });
        // if (!response.ok) {
        //   throw new Error("Failed to fetch recommendation");
        // }

        // const data = await response.json();
        const matchedLocation = Object.keys(milletData).find(
          (enteredlocation) => enteredlocation === location
        );

        if (matchedLocation) {
          const milletCrop = milletData[matchedLocation].en;
          const milletCropHindi = milletData[matchedLocation].enHindi;
          setRecommendedMillet({
            en: milletCrop,
            enHindi: milletCropHindi,
          });
          setPredictedMillet({
            en: milletCrop,
            enHindi: milletCropHindi,
          });
        }
      } catch (error) {
        console.error("Error fetching recommendation:", error.message);
        setError("Failed to fetch recommendation");
      }
      setLoading(false); // Hide loading indicator
      setShow(true);
      setRecommendEnabled(false);
      setResetEnabled(false);
    }, 2000);
  };

  return (
    <div className="container p-5 flex flex-col gap-2 mt-4">
      <p className="text-md md:text-lg text-gray-700">
        Please input the location to get the millet crop recommendation
      </p>
      <div className="flex flex-col md:flex-row  gap-5 p-2">
        <div className="flex flex-col  space-y-5 md:w-1/2 ">
          <div className="flex flex-col gap-3 w-full ">
            <div ref={geocoderContainerRef} id="geocoder" className="" />
            <div className="flex flex-row gap-2">
              <button
                className={`${
                  isRecommendEnabled ? "bg-green-700" : "bg-gray-400"
                } p-2 rounded-lg text-white h-fit px-4`}
                onClick={handleRecommend}
                disabled={!isRecommendEnabled}
              >
                Recommend
              </button>
              <button
                className={`${
                  isResetEnabled ? "bg-green-700" : "bg-gray-400"
                } p-2 rounded-lg text-white h-fit px-5`}
                onClick={handleReset}
                disabled={!isResetEnabled}
              >
                Reset
              </button>
            </div>
          </div>

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
            <div className="flex flex-col gap-4">
              <div className="w-fit h-fit">
                <p className="font-medium">
                  {recommendedMillet && (
                    <span>
                      Based on the location input, the suitable millet crop for
                      soil and climate condition is :
                    </span>
                  )}{" "}
                  <br />
                  <span className="text-green-500 font-semibold mx-1 text-3xl">
                    {recommendedMillet.en} or {recommendedMillet.enHindi}
                  </span>
                </p>
              </div>
              {recommendedMillet && (
                <div className="flex flex-col gap-3">
                  <Link to="/recipe">
                    {" "}
                    <button className="text-green-700 flex items-center gap-3">
                      Click here to try out recipes for the recommended millet{" "}
                      <span className="font-semibold  text-2xl">&gt;</span>{" "}
                    </button>
                  </Link>
                  <div className=" p-3 shadow-md ">
                    <img src="./millets.png" alt="" className="w-44" />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="flex justify-center items-center md:w:1/2">
          <div ref={mapContainerRef} className="w-[600px] h-[450px]" />
        </div>
      </div>
    </div>
  );
};

export default Map;
