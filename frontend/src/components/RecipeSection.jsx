import React, { useContext, useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import { MilletContext } from "../context/MilletContext";
import { Oval } from "react-loader-spinner";

const RecipeSection = () => {
  const { predictedMillet } = useContext(MilletContext);
  const [displayCount, setDisplayCount] = useState(9);
  const [loading, setLoading] = useState(false);
const storedRecipes = localStorage.getItem('recipes');
const recipes = storedRecipes ? JSON.parse(storedRecipes) : [];

  const increaseDisplayCount = () => {
    setLoading(true);
    setTimeout(() => {
      setDisplayCount(displayCount + 3);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col gap-4">
      <p className="h4">Based on the Recommendation, here are the recipes</p>
      <div className="flex flex-wrap gap-4">
        {recipes &&
          recipes
            .slice(0, displayCount)
            .map((recipe, index) => <RecipeCard key={index} recipe={recipe} />)}
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
      {recipes && displayCount < recipes.length && !loading && (
        <button onClick={increaseDisplayCount}>Load More</button>
      )}
    </div>
  );
};

export default RecipeSection;
