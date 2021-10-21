import {
  SEARCH_INGREDIENT,
  SEARCH_RECIPES,
  //  CLEAR_INGREDIENT,
  SET_LOADING,
  SET_INGREDIENT,
  SELELCT_INGREDIENT,
} from "./types";

const handlers = {
  DEFAULT: (state) => state,
  [SEARCH_INGREDIENT]: (state, action) => ({
    ...state,
    ingredients: action.payload,
    loading: false,
  }),
  [SEARCH_RECIPES]: (state, action) => ({ ...state, recipes: action.payload, loading: false }),
  [SET_LOADING]: (state) => ({ ...state, loading: true }),
  // [CLEAR_INGREDIENT]: (state) => ({ ...state, ngredient: [] }),
  [SET_INGREDIENT]: (state) => ({
    ...state,
    ingredients: [...state.ingredients, state.ingredient],
  }),
  [SELELCT_INGREDIENT]: (state, action) => ({
    ...state,
    ingredient: action.payload,
  }),
};

export const spoonReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;

  return handler(state, action);
};
