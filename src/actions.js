export const Action = Object.freeze({
  LoadRecipes: 'LoadRecipes',
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
        console.log(data.recipes);
        dispatch(loadRecipes(data.recipes));
      }
    })
    .catch(e => console.error(e));
  };
}