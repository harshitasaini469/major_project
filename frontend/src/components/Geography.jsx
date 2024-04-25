import { faC } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Geography = () => {
  const andhraFacts = [
    {
      heading: "Coastal Embrace",
      description:
        "Andhra Pradesh boasts an impressive 970 km long eastern coastline bordering the Bay of Bengal, making it the second-longest coastline in India.",
    },
    {
      heading: "Eastern Ghats Embrace",
      description:
        "The Eastern Ghats, a mountain range, run through the state, acting as a natural barrier separating the coastal plains from the Deccan Plateau in the west.",
    },
    {
      heading: "Plateau Power",
      description:
        "Andhra Pradesh extends onto the Deccan Plateau, offering a diverse landscape beyond the coastal areas. This plateau region contributes to variations in elevation and terrain.",
    },
    {
      heading: "Riverine Riches",
      description:
        "The lifeblood of agriculture in the state, major rivers like Godavari and Krishna flow through Andhra Pradesh, providing crucial irrigation and shaping the fertile river deltas.",
    },
    {
      heading: "Climatic Diversity",
      description:
        "The state experiences a range of climatic conditions. The coastal region enjoys a tropical climate with moderate rainfall, while the interior plateau tends to be drier with seasonal variations.",
    },
    {
      heading: "District Delimitation",
      description:
        "Andhra Pradesh is currently divided into 26 administrative districts, spread across three distinct cultural regions: Coastal Andhra, North Andhra, and Rayalaseema.",
    },
  ];
  const midpoint = Math.ceil(andhraFacts.length / 2);

  return (
    <div className="container  h-[80vh] mt-3">
        <p className="h1 text-center p-4 text-green-600">Geography of Andhra Pradesh</p>
      <div className="flex gap-5 justify-center items-center">
      <div className="flex flex-1 flex-col gap-4">
        {andhraFacts.slice(0, midpoint).map((fact, index) => (
          <div key={index} className="fact">
            <h3 className="h5 text-green-700">{fact.heading}</h3>
            <p className="text-sm tracking-wide">{fact.description}</p>
          </div>
        ))}
      </div>

      <img src="./images/andhra.png" alt="andhra" className="flex-1" />

      <div className="flex flex-1 flex-col gap-4">
        {andhraFacts.slice(midpoint).map((fact, index) => (
          <div key={index} className="fact flex flex-col">
            <h3 className="h5 text-green-700 self-end">{fact.heading}</h3>
            <p className="text-sm tracking-wide">{fact.description}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Geography;
