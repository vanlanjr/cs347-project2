import React from 'react';
import './Contents.css';
// import Recipe from './Recipe';

// function Contents(props) {

//   const recipes = props.recipes;

//   return (
//     <div className="table-of-contents">
//       <ol>
//         {recipes.map(recipe => <li key= {recipe.name}> {recipe.name} </li>
//         )}
//       </ol>
//     </div>
//   );
// }

// export default Contents;

export function Contents(props) {
  const recipes = props.recipes;
  console.log(recipes);
  return (
    <div id="root">
      <h1>Table of Contents</h1>
      <hr></hr>
      <ul>
        {recipes.map(recipe => <li class="content" key= {recipe.id}> {recipe.name} </li>)}
      </ul>
    </div>
  );
}