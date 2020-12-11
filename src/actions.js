export const Action = Object.freeze({
  LoadRecipes: 'LoadRecipes',
  LoadRecipe: 'LoadRecipe',
  FinishAddingRecipe: 'FinishAddingRecipe',
});


// This is for hard coding
export function loadRecipes(recipes) {
  return {
    type: Action.LoadRecipes,
    payload: recipes,
  }
}

export function finishAddingRecipe(recipe) {
  return {
    type: Action.FinishAddingRecipe,
    payload: recipe,
  };
}

function checkForErrors(response) {
  if (!response.ok) {
    throw Error(`${response.status}: ${response.statusText}`);
  }
  return response;
}

const host = 'https://cookbook-api.jvfunweb.me:8442';

export function getRecipes() {
  return dispatch => {
    fetch(`${host}/recipes`)
      .then(checkForErrors)
      .then(response => response.json())
      .then(data => {
        if (data.ok) {
          // we will have data.recipes
          //console.log(data);
          dispatch(loadRecipes(data.recipes));
        }
    })
    .catch(e => console.error(e));
  };

}

// This is for pulling from web service
export function loadRecipe(recipeID) {
  console.log('trying to load recipe');
  return dispatch => {
    fetch(`${host}/recipes`)
    .then(checkForErrors)
    .then(response => response.json())
    .then(data => {
      if(data.ok) {
        dispatch(loadRecipes(data.recipes));
      }
    })
    .catch(e => console.error(e));
  };
}

export function startAddingRecipe(name, description, ingredients, steps) {

  const recipe = {
    name,
    description,
    ingredients,
    steps
  };

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(recipe),
  }

  return dispatch => {
    fetch(`${host}/recipe`, options)
    .then(checkForErrors)
    .then(response => response.json())
    .then(data => {
      if(data.ok) {
        recipe.id = data.id;
        dispatch(finishAddingRecipe(recipe));
      }
    })
    .catch(e => console.error(e));
  };
}