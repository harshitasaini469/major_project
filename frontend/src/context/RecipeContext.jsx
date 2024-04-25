import React, { createContext, useState } from "react";

const RecipeContext = createContext();

const RecipeProvider = ({ children }) => {
    const [recipe, setRecipe] = useState(null);

  return (
    <RecipeContext.Provider value={{ recipe, setRecipe}}>
      {children}
    </RecipeContext.Provider>
  );

};
export {RecipeProvider,RecipeContext };
