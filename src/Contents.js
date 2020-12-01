import React from 'react';
import './Contents.css';

function Contents(props) {

  const recipes = props.recipes;

  return (
    <div className="table-of-contents">
      <ol>
        {recipes.map(recipe => 
          <li>
            {recipe.name}
          </li>
        )}
      </ol>
    </div>
  );
}

export default Contents;