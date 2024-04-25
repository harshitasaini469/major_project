import React from "react";

const RecipeRecommendation = () => {
  const milletRecipesFeatures = [
    {
      heading: "Recipes for your perfect millet",
      description:
        "Discover delicious and nutritious recipes specifically designed for your AI-recommended millet variety.",
    },
    {
      heading: "Goodbye guesswork",
      description:
        "Explore the culinary potential of millets with curated recipes.",
    },
    {
      heading: "More than just taste",
      description:
        "Get recipes packed with flavor, health benefits, and nutritional information.",
    },
  ];

  return (
    <div className="bg-amber-100 flex flex-col gap-5 p-4 justify-items-center align-items-center rounded-md">
      <div className="flex gap-1 ">
        <div className="w-28 h-1 bg-amber-700 mt-3"></div>
        <p className="h3">Millet Recipe Recommendation</p>
        <div className="w-28 h-1 bg-amber-700 mt-3"></div>
      </div>
      <div class="card mb-3 bg-transparent border-none">
        <div class="row g-3">
          <div class="col-md-7 ">
            <div class="card-body  h-full flex flex-col gap-3">
              {milletRecipesFeatures.map((feature) => {
                return (
                  <div className="flex gap-3">
                    <div className=""><p className="text-3xl text-amber-700">&bull;</p></div>
                    <p className="mt-1">
                      <span className="text-amber-700 font-semibold">
                        {feature.heading}
                      </span>{" "}
                      : {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div class="col-md-5">
            <img
              src="./images/recipe.png"
              class="img-fluid rounded-start h-full"
              alt="..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeRecommendation;
