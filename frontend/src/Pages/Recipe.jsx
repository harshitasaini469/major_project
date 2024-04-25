import React, { useContext, useEffect, useState } from "react";
import RecipeBanner from "../components/RecipeBanner";
import RecipeSection from "../components/RecipeSection";
import { MilletContext } from "../context/MilletContext";
import { Oval } from "react-loader-spinner";
import axios from "axios";

const Recipe= () => {
  const { predictedMillet } = useContext(MilletContext);
  const [loading, setLoading] = useState(false);

  // console.log(predictedMillet);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes(predictedMillet.en, predictedMillet.enHindi);
    console.log(predictedMillet.en, predictedMillet.enHindi);
  }, []);

  const fetchRecipes = async (millet, milletHindi) => {
    setLoading(true);
    setTimeout(async () => {
      try {
        // const response = await fetch("http://127.0.0.1:5000/search", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({millet,milletHindi }),
        // });
        // if (!response.ok) {
        //   throw new Error("Failed to fetch recipes");
        // }
        // const data = await response.json();
        // setRecipes(data.recipes);

        const combinedNames = `${predictedMillet.en},${predictedMillet.enHindi}`;
        const response = await axios.get(
          `https://api.edamam.com/search?q=${combinedNames}&app_id=3ede6930&app_key=7c7bac9f7c5b746230a56dcea8c12cff`
        );
        const recipes = await response.data.hits.map((hit) => hit.recipe);
        setRecipes(recipes);
        console.log(recipes);
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
        <RecipeSection recipes={recipes} />
      )}{" "}
    </div>
  );
};

export default Recipe;
