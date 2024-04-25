import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RecipeModal from "./RecipeModal";
const RecipeCard = ({ recipe }) => {
  const [modalOpen, setModalOpen] = useState(false); // State to manage modal visibility

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <p key={i} className="text-xl">
          &#x2B50;
        </p>
      );
    }
    return stars;
  };
  // Event handler to open the modal
  const redirectToRecipe = () => {
    window.open(recipe.url, "_blank");
  };

  const id = recipe.uri.split("#")[1];
  return (
    <div class="card w-80   rounded-lg">
      <img
        src={recipe.image}
        class="card-img-top h-60 object-cover"
        alt={recipe.label}
      />
      <div class="card-body flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <div className="flex ratings">{/* {renderStars(4)} */}</div>
          <p class="card-title h5">{recipe.label}</p>
          <div className="flex gap-1 text-gray-600 text-sm">
            <p>{recipe.dishType}</p>
            <span>&bull;</span>
            <p>{recipe.mealType}</p>
            <span>&bull;</span>
            <p>Servings : {recipe.yield}</p>
          </div>
        </div>{" "}
        <button
          class="btn btn-outline-success rounded-2xl w-fit px-5 self-center mt-auto "
          onClick={redirectToRecipe}
        >
          View Recipe
        </button>
      </div>
      {modalOpen && (
        <RecipeModal recipe={recipe} onClose={() => setModalOpen(false)} />
      )}
    </div>
  );
};

export default RecipeCard;
