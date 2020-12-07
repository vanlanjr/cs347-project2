import React from 'react';
import {Link} from 'react-router-dom';

export function Recipes(props) {
  return (
    <React.Fragment>
      <h1>Recipes</h1>
      {props.recipes.map(recipe => 
        <li key={recipe.id}><Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link></li>
      )}
    </React.Fragment>
  );
}