import React, { useState} from 'react';
import './Recipe.css'
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {enterEditMode, leaveEditMode, startSavingRecipe, startDeletingRecipe} from './actions';

export function RecipeReader(props) {

  const {recipe} = props;
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState(recipe.name);
  const [description, setDescription] = useState(recipe.description);
  const [ingredients, setIngredients] = useState(recipe.ingredients);
  const [steps, setSteps] = useState(recipe.steps);

  const editRecipe = () => {
    dispatch(enterEditMode(recipe));
  }

  const onCancel = () => {
    dispatch(leaveEditMode(recipe));
  }

  const onDelete = () => {
    dispatch(startDeletingRecipe(recipe));
    history.push(`/recipe`);
  }

  const previousRecipe = () => {
    console.log()
    let index = recipe.id;
    let stopFlag = true;
    while (index > 1 && stopFlag) {
      index--;
      if (!recipe.is_deleted) {
        history.push(`/recipe/${index}`);
        stopFlag = false;
      }
    }
  };

  const nextRecipe = () => {
    let index = recipe.id;
    console.log(props.totalRecipes);
    while (index < props.totalRecipes) {
      if (!recipe.is_deleted) {
        history.push(`/recipe/${index}`);
      }
      index++;
    }
  };

  const onSave = () => {
    dispatch(startSavingRecipe({
      id: recipe.id,
      name,
      description,
      ingredients,
      steps,
    }));
  }

  if (recipe.isEditing) {
    return (
      <React.Fragment>
        <div id="reader">
          <h1>Name</h1>
          <input type="text" value={name}
            onChange={e => setName(e.target.value)}/>
          <h3>Description</h3>
          <input type="text" value={description}
            onChange={e => setDescription(e.target.value)}/>
          <h3>Ingredients</h3>
          <input type="text" value={ingredients}
            onChange={e => setIngredients(e.target.value)}/>
          <h3>Steps</h3>
          <input type="text" value={steps}
            onChange={e => setSteps(e.target.value)}/>
          <button onClick={onSave}>Save</button>
          <button onClick={onCancel}>Cancel</button>
           <button onClick={onDelete}>Delete</button>
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
