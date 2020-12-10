import React from 'react';
import './Recipe.css'
import {useHistory} from 'react-router-dom';

export function RecipeReader(props) {

  const {recipe} = props;
  const history = useHistory();

  const editRecipe = () => {
    history.push(`/recipe/${recipe.id}/edit`);
  }

  const previousRecipe = () => {
    if (recipe.id > 0) {
      history.push(`/recipe/${recipe.id - 1}`);
    }
  };

  const nextRecipe = () => {
    if (recipe.id < props.totalRecipes - 1) {
      history.push(`/recipe/${recipe.id + 1}`);
    }
  };

  return (
    <React.Fragment>
      <h1>{recipe.name}</h1>
      <div id="reader">
        <h3>Description</h3>
        <p>{recipe.description}</p>
        <h3>Ingredients</h3>
        <p>{recipe.ingredients}</p>
        <h3>Steps</h3>
        <p>{recipe.steps}</p>
        <h3>Categories</h3>
        <p>{[...recipe.categories].join(', ')}</p>
        <button onClick={editRecipe}>Edit</button>
        <div id="nav-buttons">
          <button onClick={previousRecipe}>Prev</button>
          <button onClick={nextRecipe}>Next</button>
        </div>
      </div>
    </React.Fragment>
  );
}