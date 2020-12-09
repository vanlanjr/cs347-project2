import React from 'react';
import './Contents.css';
import {Link} from 'react-router-dom';

export function Contents(props) {
  return (
    <React.Fragment>
      <h1>Table of Contents</h1>
      <ul>
        {props.recipes.map(recipe =>
          <li key={recipe.id}><Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link></li>
        )}
      </ul>

      <h3>Food Categories</h3>
      <ul>
        {[...props.categories].map(category =>
          <li key={category}><Link to={`/recipes/${category}`}>{category}</Link></li>
        )}
      </ul>
    </React.Fragment>
  );
}