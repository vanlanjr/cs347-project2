import { Action } from "./actions";

const initialState = {
  isWaiting: false,
  recipes: [],

};

function reducer(state = initialState, action) {

  switch (action.type) {
    case Action.LoadRecipes:
      return {
        ...state, // all properties of old object
        recipes: action.payload // with new added recipes
      }
    default:
      return state;
  }

}

export default reducer;