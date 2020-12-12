import React from 'react';
import './Contents.css';
import {Link} from 'react-router-dom';

export function Contents(props) {
  return (
    <React.Fragment>
      <h1>Recipes</h1>
      <ul>
        {props.recipes.map(recipe =>
          <li key={recipe.id}><Link id="link" to={`/recipe/${recipe.id}`}>{recipe.name}</Link></li>
        )}
      </ul>
    </React.Fragment>
  );
}