import React, { useState} from 'react';
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
            <textarea 
              rows="15" 
              cols="50" 
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          <h3>Ingredients</h3>
            <textarea 
              rows="15" 
              cols="50" 
              value={ingredients}
              onChange={e => setIngredients(e.target.value)}
            />
          <h3>Steps</h3>
            <textarea 
              rows="15" 
              cols="50" 
              value={steps}
              onChange={e => setSteps(e.target.value)}
            />
          <div>
            <button onClick={onSave}>Save</button>
            <button onClick={onCancel}>Cancel</button>
            <button onClick={onDelete}>Delete</button>
          </div>
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
        </div> 
      </React.Fragment>
    );
  }
}
