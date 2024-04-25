import React from "react";

const RecommendationProcess = () => {
    const milletRecommendationProcess = [
        {
            heading: "Data Preparation",
            steps: [
                {
                    subheading: "Calibration",
                    description: "Satellite data requires calibration to ensure accuracy."
                },
                {
                    subheading: "Subset Extraction",
                    description: "Specific areas of interest (Andhra Pradesh districts) are extracted (subset) for focused analysis."
                }
            ]
        },
        {
            heading: "Pre-processing",
            steps: [
                {
                    subheading: "Terrain Correction",
                    description: "Satellite images can be distorted by terrain. This step corrects for elevation variations."
                },
                {
                    subheading: "Mosaic",
                    description: "If using multiple satellite images, they're stitched together to create a seamless picture."
                }
            ]
        },
        {
            heading: "Feature Engineering",
            steps: [
                {
                    subheading: "District Mask",
                    description: "A digital mask isolates data relevant to specific districts, excluding irrelevant areas."
                },
                {
                    subheading: "Layer Stack",
                    description: "Different data layers (e.g., satellite bands, weather data) are combined for a more comprehensive analysis."
                }
            ]
        },
        {
            heading: "Machine Learning",
            steps: [
                {
                    subheading: "Backscatter Curve",
                    description: "This analysis is used to understand how radar signals interact with the land surface, informing feature selection."
                },
                {
                    subheading: "Random Forest",
                    description: "The prepared data is fed into a random forest model to identify patterns and predict the ideal millet variety for each district."
                }
            ]
        }
    ];
    

  return (
    <div className="flex flex-col items-center gap-4 p-5 bg-green-200">
      <p className="h2">How it Works?</p>
      <div className="flex gap-4">
        {milletRecommendationProcess.map((process) => {
          return (
            <div className="bg-white  p-3 bg-white rounded-md flex flex-col items-center gap-3">
              <p className="text-green-600  font-semibold">{process.heading}</p>
              {process.steps.map((step) => (
                <div className=" ">
                  <div className="flex gap-2">
                      <p className="text-2xl  ">&bull;</p>
                    <p className="mt-1">
                     <span className="font-semibold">{step.subheading}</span>  : {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecommendationProcess;
