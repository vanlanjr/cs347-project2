import React, { useEffect } from 'react';
import './Recipe.css'
import {useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {loadRecipe, enterEditMode, leaveEditMode} from './actions';

export function RecipeReader(props) {

  const {recipe} = props;
  const dispatch = useDispatch();
  const history = useHistory();

  // const editRecipe = () => {
  //   history.push(`/recipe/${recipe.id}/edit`);
  // }
  const editRecipe = () => {
    dispatch(enterEditMode(recipe));
  }

  const onCancel = () => {
    dispatch(leaveEditMode(recipe));
  }


  const previousRecipe = () => {
    if (recipe.id > 1) {
      history.push(`/recipe/${recipe.id - 1}`);
    }
  };

  const nextRecipe = () => {
    console.log('next recipe');
    if (recipe.id < props.totalRecipes) {
      history.push(`/recipe/${recipe.id + 1}`);
    }
  };

  if (recipe.isEditing) {
    return (
      <React.Fragment>
        <h1>{recipe.name}</h1>
        <div id="reader">
          <h3>Description</h3>
          <input type="text" />
          <h3>Ingredients</h3>
          <input type="text" />
          <h3>Steps</h3>
          <input type="text" />
          <button>Save</button>
          <button onClick={onCancel}>Cancel</button>
        </div> 
      </React.Fragment>
    );
  } else {
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

          {/* <h3>Categories</h3>
          <p>{[...recipe.categories].join(', ')}</p>*/}

          <button onClick={editRecipe}>Edit</button>
          <div id="nav-buttons">
            <button onClick={previousRecipe}>Prev</button>
            <button onClick={nextRecipe}>Next</button>
          </div>
        </div> 
      </React.Fragment>
    );
  }
}
