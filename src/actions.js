export const Action = Object.freeze({
  LoadRecipes: 'LoadRecipes',
  LoadRecipe: 'LoadRecipe',
});

// This is for hard coding
export function loadRecipes(recipes) {
  return {
    type: Action.LoadRecipes,
    payload: recipes,
  }
}

function checkForErrors(response) {
  if (!response.ok) {
    throw Error(`${response.status}: ${response.statusText}`);
  }
  return response;
}

const host = 'https://cookbook-api.jvfunweb.me:8442';

// This is for pulling from web service
export function loadRecipe() {
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

export function startAddingRecipe() {
  const recipe = {
    name: '',
    description: '',
    ingredients: '',
    steps: ''
  };

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(recipe),
  }

  return dispatch => {
    fetch(`${host}/recipes`, options)
    .then(checkForErrors)
    .then(response => response.json())
    .then(data => {
      if(data.ok) {
        //dispatch(loadRecipes(data.recipes));
      }
    })
    .catch(e => console.error(e));
  };
}