import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchRecipe } from "../utils/fetchRecipe";
import { Oval } from "react-loader-spinner";
import axios from "axios";
import RecipeCard from "../components/RecipeCard";
import { MilletContext } from "../context/MilletContext";
import { AiFillPushpin } from "react-icons/ai";
import { BsPatchCheck } from "react-icons/bs";
import RecipeSection from "../components/RecipeSection";
const RecipeDetails = () => {
  const { id } = useParams();
  console.log("id", id);
  const [loading, setLoading] = useState(false);
  const [recipe, setRecipe] = useState(null);
  const [recipes, setRecipes] = useState(null);
  const { predictedMillet } = useContext(MilletContext);

  const getRecipe = async (id) => {
    try {
      setLoading(true);
      setTimeout(async () => {
        const url = `https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23${id}&app_id=3ede6930&app_key=7c7bac9f7c5b746230a56dcea8c12cff`;

        const response = await axios.get(url);

        const data = await response.data;
        console.log(data);
        setRecipe(data[0]);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRecipe(id);
    console.log(recipe);
  }, [id]);
  if (loading || !recipe) {
    return (
      <div className="w-full h-[100vh] flex items-center justify-center">
        <Oval
          visible={true}
          height="50"
          width="50"
          ariaLabel="discuss-loading"
          wrapperStyle={{}}
          wrapperClass="discuss-wrapper"
          color="black"
          backgroundColor="#F4442E"
        />{" "}
      </div>
    );
  }
  return (
    <div className="w-full flex flex-col justify-center items-center gap-5">
      <div className="w-full px-4 lg:px-20 pt-5">
        <div className="flex flex-col gap-4 items-center">
          <div className="flex flex-col items-center gap-2">
            <p className="h3 text-center mt-2 mb-2">{recipe.label}</p>

            <img src={recipe?.image} alt="" className="flex self-center w-96" />
          </div>
          <div className="flex  gap-3 items-center justify-center px-4">
            <div className="flex flex-col justify-between">
              <span className="text-center border border-gray-500 py-1.5 px-2 rounded-full mb-2">
                {recipe?.calories.toFixed(2)}{" "}
              </span>

              <p className=" text-[12px] md:text-md">CALORIES</p>
            </div>

        

            <div className="flex flex-col justify-center ">
              <span className=" text-center border border-gray-500 p-1.5 rounded-full mb-2">
                {recipe?.dishType}
              </span>
              <p className="text-[12px] md:text-md">DISH TYPE</p>
            </div>
            <div className="flex flex-col justify-center ">
              <span className=" text-center border border-gray-500 p-1.5 rounded-full mb-2">
                {recipe?.mealType}
              </span>
              <p className="text-[12px] md:text-md">MEAL TYPE</p>
            </div>
            <div className="flex flex-col justify-center ">
              <span className=" text-center border border-gray-500 py-1.5 rounded-full mb-2">
                {recipe?.yield}
              </span>
              <p className="text-[12px] md:text-md">SERVINGS</p>
            </div>
          
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center md:px-10 mt-10">
      
        <div className="w-full flex gap-5 justify-center  pr-1">
          <div className="flex flex-col gap-2">
            <p className="text-green-500 text-2xl underline">Ingredients</p>

            {recipe?.ingredientLines?.map((ingredient, index) => {
              return (
                <p key={index} className=" flex gap-2">
                  <AiFillPushpin className="text-green-800 text-xl" />{" "}
                  {ingredient}
                </p>
              );
            })}
          </div>

          <div className="flex flex-col w-1/2 gap-3">
            <p className="text-green-700 text-2xl underline">Health Labels</p>

            <div className="flex flex-wrap gap-2">
              {recipe?.healthLabels.map((item, index) => (
                <p
                  className=" flex gap-2 bg-[#fff5f518] px-4 py-1 rounded-full "
                  key={index}
                >
                  <BsPatchCheck color="green" /> {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* RIGHT SIDE */}
      <div>
       <a href={recipe.url} target="_blank" className="btn btn-success m-auto">View Complete Recipe</a>
      </div>
      <div className="container flex flex-wrap mt-5 md:mt-0">
        <p className="h3 mb-2">Also Try These</p>
        <RecipeSection />
      </div>
    </div>
  );
};

export default RecipeDetails;
