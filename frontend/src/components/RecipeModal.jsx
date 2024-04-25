import React from 'react';

const RecipeModal = ({ recipe, onClose }) => {
  return (
    <div className="modal-dialog modal-fullscreen-sm-down" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{recipe.label}</h5>
            <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {/* Display recipe details */}
            <img src={recipe.image} alt={recipe.label} className="img-fluid mb-3" />
            <h6 className="text-muted">Ingredients:</h6>
            <ul>
            {
                recipe?.ingredientLines?.map((ingredient, index) => {
                  return (
                    <p key={index} className='text-neutral-100 flex gap-2'>
                      {ingredient}
                    </p>
                  )
                })
              }
            </ul>
            <p className="text-muted">Instructions:</p>
            {/* <ol>
              {recipe.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol> */}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
            {/* You can add additional buttons here if needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeModal;
