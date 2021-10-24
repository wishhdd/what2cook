import {
  SEARCH_INGREDIENT,
  SEARCH_RECIPES,
  //  CLEAR_INGREDIENT,
  SET_LOADING,
  SET_INGREDIENT,
  INPUT_INGREDIENT,
  DEL_INGREDIENT,
  GET_FULL_RECIPE,
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
  [SET_INGREDIENT]: (state, action) => ({
    ...state,
    ingredients: [...state.ingredients, action.payload],
  }),
  [INPUT_INGREDIENT]: (state, action) => ({
    ...state,
    ingredient: action.payload,
  }),
  [DEL_INGREDIENT]: (state, action) => ({
    ...state,
    ingredients: state.ingredients.filter((item) => item !== action.payload),
  }),
  [GET_FULL_RECIPE]: (state, action) => ({
    ...state,
    fullRecipes: [...state.fullRecipes, action.payload],
    loading: false,
  }),
};

export const spoonReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;

  return handler(state, action);
};
