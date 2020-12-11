import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { startAddingRecipe} from './actions';


export function RecipeWriter(props) {

  const {recipe} = props;
  const [name, setName] = useState(recipe.name);
  const [description, setDescription] = useState(recipe.description);
  const [ingredients, setIngredients] = useState(recipe.ingredients);
  const [steps, setSteps] = useState(recipe.steps);
  
  const dispatch = useDispatch();

  const onSave = () => {
    dispatch(startAddingRecipe(name, description, ingredients, steps));
  };

  return (
    <div className="writer-root">
      <h1>Name</h1>
      <input 
        type="text" 
        value={name}
        onChange={e => setName(e.target.value)}
      />
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

      <button onClick={onSave}>Save</button>
    </div>
  );
}