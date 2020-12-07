import React, {useState} from 'react';

export function RecipeWriter(props) {
  const {recipe, saveRecipe} = props;
  const [name, setName] = useState(recipe.name);
  const [description, setDescription] = useState(recipe.description);
  const [ingredients, setIngredients] = useState(recipe.ingredients);
  const [steps, setSteps] = useState(recipe.steps);
  const [categories, setCategories] = useState([...recipe.categories].join(', '));

  const onSave = () => {
    saveRecipe({
      id: recipe.id,
      name,
      description,
      ingredients,
      steps,
      categories: new Set(categories.split(', ')),
    })
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
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <h3>Ingredients</h3>
      <textarea 
        value={ingredients}
        onChange={e => setIngredients(e.target.value)}
      />
      <h3>Steps</h3>
      <textarea 
        value={steps}
        onChange={e => setSteps(e.target.value)}
      />
      <h3>Categories</h3>
      <input 
        type="text" 
        value={categories}
        onChange={e => setCategories(e.target.value)}
      />
      <button onClick={onSave}>Save</button>
    </div>
  );
}