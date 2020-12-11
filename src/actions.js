export const Action = Object.freeze({
  LoadRecipes: 'LoadRecipes',
  LoadRecipe: 'LoadRecipe',
  FinishAddingRecipe: 'FinishAddingRecipe',
  FinishSavingRecipe: 'FinishSavingRecipe',
  FinishDeletingRecipe: 'FinishDeletingRecipe',
  EnterEditMode: 'EnterEditMode',
  LeaveEditMode: 'LeaveEditMode',
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

export function finishSavingRecipe(recipe) {
  return {
    type: Action.FinishSavingRecipe,
    payload: recipe,
  };
}

export function finishDeletingRecipe(recipe) {
  return {
    type: Action.FinishDeletingRecipe,
    payload: recipe,
  };
}

export function enterEditMode(recipe) {
  return {
    type: Action.EnterEditMode,
    payload: recipe,
  };
}

export function leaveEditMode(recipe) {
  return {
    type: Action.LeaveEditMode,
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

export function startSavingRecipe(recipe) {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(recipe),
  }

  return dispatch => {
    fetch(`${host}/recipe/${recipe.id}`, options)
    .then(checkForErrors)
    .then(response => response.json())
    .then(data => {
      if(data.ok) {
        dispatch(finishSavingRecipe(recipe));
      }
    })
    .catch(e => console.error(e));
  };
}

export function startDeletingRecipe(recipe) {
  const options = {
    method: 'DELETE',
  };

  return dispatch => {
    fetch(`${host}/recipe/${recipe.id}`, options)
    .then(checkForErrors)
    .then(response => response.json())
    .then(data => {
      if(data.ok) {
        dispatch(finishDeletingRecipe(recipe));
      }
    })
    .catch(e => console.error(e));
  };
}