import { Action } from "./actions";

const initialState = {
  isWaiting: true,
  recipes: [],

};

function reducer(state = initialState, action) {
  
  switch (action.type) {
    
    case Action.LoadRecipes:
      return {
        ...state, // all properties of old object
        recipes: action.payload, // with new added recipes
        isWaiting: false
      };
    case Action.LoadRecipe:
      return { 
        ...state, // all properties of old object
        recipes: action.payload // with new added recipes
      };
    case Action.FinishAddingRecipe:
      return {
        ...state, 
        recipes: [...state.recipes, action.payload],  // new recipe goes to the back
      };
    case Action.EnterEditMode:
      return {
        ...state,
        recipes: state.recipes.map(recipe => {
          if (recipe.id === action.payload.id) {
            return {...recipe, isEditing: true};
          } else {
            return recipe;
          }
        }),
      };
    case Action.LeaveEditMode:
      return {
        ...state,
        recipes: state.recipes.map(recipe => {
          if (recipe.id === action.payload.id) {
            return {...recipe, isEditing: undefined};
          } else {
            return recipe;
          }
        }),
      };
    case Action.FinishSavingRecipe:
      return {
        ...state,
        recipes: state.recipes.map(recipe => {
          if (recipe.id === action.payload.id) {
            return action.payload;
          } else {
            return recipe;
          }
        }),
      };

    case Action.FinishDeletingRecipe:
      return {
        ...state,
        recipes: state.recipes.filter(recipe => recipe.id !== action.payload.id),
      };

    default:
      return state;
  }


}

export default reducer;