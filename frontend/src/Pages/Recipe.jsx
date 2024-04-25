import React, { useContext, useEffect, useState } from "react";
import RecipeBanner from "../components/RecipeBanner";
import RecipeSection from "../components/RecipeSection";
import { MilletContext } from "../context/MilletContext";
import { Oval } from "react-loader-spinner";
import axios from "axios";

const Recipe = () => {
  const { predictedMillet } = useContext(MilletContext);
  const [loading, setLoading] = useState(false);
  const [dataFetched, setDataFetched] = useState(false);

  // console.log(predictedMillet);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, [predictedMillet, dataFetched]);

  // Remaining component code...

  const fetchRecipes = async () => {
    setLoading(true);
    setTimeout(async () => {
      try {
        if (!dataFetched) {
          const combinedNames = `${predictedMillet.en},${predictedMillet.enHindi}`;
          const response = await axios.get(
            `https://api.edamam.com/search?q=${combinedNames}&app_id=3ede6930&app_key=7c7bac9f7c5b746230a56dcea8c12cff`
          );
          const recipes = await response.data.hits.map((hit) => hit.recipe);
          setRecipes(recipes);
          // Assuming recipes is an array of recipe objects
          localStorage.setItem("recipes", JSON.stringify(recipes));
          setDataFetched(true);
        }
      } catch (error) {
        console.log("Error fetching recipes:", error.message);
      }
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="container p-5 flex flex-col gap-5 ">
      <RecipeBanner />
      {loading ? (
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
      ) : (
        <div>
          <p className="h4">
            Based on the Recommendation, here are the recipes
          </p>
          <RecipeSection />
        </div>
      )}{" "}
    </div>
  );
};

export default Recipe;
