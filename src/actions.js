export const Action = Object.freeze({
  LoadRecipes: 'LoadRecipes',
});

export function loadRecipes(recipes) {
  return {
    type: Action.LoadRecipes,
    payload: recipes,
  }
}