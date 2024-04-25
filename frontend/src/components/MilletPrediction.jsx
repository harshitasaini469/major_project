import React from "react";

const MilletPrediction = () => {
  const milletRecommendationFeatures = [
    {
      heading: "Predicts ideal millet variety",
      description:
        "This innovative feature uses AI and satellite imagery to recommend the perfect millet for a specific location.",
    },
    {
      heading: "AI-powered analysis",
      description:
        "The AI model is trained on vast datasets of satellite images, weather data, and soil information.",
    },
    {
      heading: "Location-specific recommendations",
      description:
        "By analyzing a location's data, the model suggests the millet type most likely to thrive in that unique environment.",
    },
    {
      heading: "Informed decision-making",
      description:
        "This targeted approach helps farmers choose the best millet variety, leading to increased yields.",
    },
    {
      heading: "Improved resource utilization",
      description:
        "By selecting the most suitable millet, farmers can optimize their resource usage.",
    },
  ];

  return (
    <div className="bg-green-100 flex flex-col gap-5 p-4 justify-items-center align-items-center rounded-md">
      <div className="flex gap-1 ">
        <div className="w-28 h-1 bg-green-600 mt-3"></div>
        <p className="h3">Millet Prediction</p>
        <div className="w-28 h-1 bg-green-600 mt-3"></div>
      </div>
      <div class="card mb-3 bg-transparent border-none">
        <div class="row g-3">
          <div class="col-md-5">
            <img
              src="./images/millet_recommendation.png"
              class="img-fluid rounded-start h-full"
              alt="..."
            />
          </div>
          <div class="col-md-7 ">
            <div class="card-body  h-full flex flex-col gap-3">
              {milletRecommendationFeatures.map((feature) => {
                return (
                  <div className="flex gap-3  ">
                    <div className=""><p className="text-3xl text-green-700">&bull;</p></div>
                    <p className="mt-1">
                      <span className="text-green-700 font-semibold">
                        {feature.heading}
                      </span>{" "}
                      : {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MilletPrediction;
