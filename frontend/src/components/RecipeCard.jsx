import React, { useEffect } from "react";

const RecipeCard = ({ recipe }) => {
  // Function to render star icons based on the rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<p key={i} className="text-xl">&#x2B50;</p>);
    }
    return stars;
  };

  const API_URL='https://api.unsplash.com/search/photos'
useEffect(()=>{

},[])


  return (
    <div class="card w-80 rounded-lg">
      <img src="./images/recipe1.png" class="card-img-top" alt="..." />
      <div class="card-body flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <div className="flex ratings">
            {renderStars(4)}
          </div>
          <p class="card-title h5">{recipe.TranslatedRecipeName}</p>
          <div className="flex gap-1 text-gray-600 text-sm">
            <p>{recipe.TotalTimeInMins} mins</p>
            <span>&bull;</span>
            <p>2 people</p>
            <span>&bull;</span>
            <p>Beginner</p>
          </div>
        </div>
        <a
          href="#"
          class="btn btn-outline-success rounded-2xl w-fit px-5 self-center mt-auto "
        >
          View Recipe
        </a>
      </div>
    </div>
  );
};

export default RecipeCard;
