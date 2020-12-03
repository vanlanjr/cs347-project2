import React from 'react';
import {useHistory} from 'react-router-dom';

export function RecipeReader(props) {
  const {recipe} = props;
  const history = useHistory();

  const editRecipe = () => {
    history.push(`/recipe/${recipe.id}/edit`);
  }

  return (
    <React.Fragment>
      <h1>{recipe.name}</h1>
      <div>
        <h3>Description</h3>
        <p>{recipe.description}</p>
        <h3>Ingredients</h3>
        <p>{recipe.ingredients}</p>
        <h3>Steps</h3>
        <p>{recipe.steps}</p>
        <h3>Categories</h3>
        <p>{[...recipe.categories].join(', ')}</p>
      </div>
      <button onClick={editRecipe}>Edit</button>
    </React.Fragment>
  );
}