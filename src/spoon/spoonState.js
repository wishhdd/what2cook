import React, { useReducer } from "react";
import { SpoonContext } from "./spoonContext";
import { spoonReducer } from "./spoonReducer";
import {
  //  SEARCH_INGREDIENT,
  SEARCH_RECIPES,
  SET_LOADING,
  SET_INGREDIENT,
  INPUT_INGREDIENT,
  //  CLEAR_INGREDIENT,
  DEL_INGREDIENT,
  GET_FULL_RECIPE,
} from "./types";
import axios from "axios";

const spoonApiKey = process.env.REACT_APP_API_KEY;

export const SpoonState = ({ children }) => {
  const startState = {
    ingredient: "",
    ingredients: [],
    loading: false,
    recipes: [],
    fullRecipe: {},
  };

  const [state, dispatch] = useReducer(spoonReducer, startState);

  const getFullRecipe = async (idRecipe) => {
    setLoading();
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/${idRecipe}/information?apiKey=${spoonApiKey}`
    );
    //console.log(response.data);
    dispatch({
      type: GET_FULL_RECIPE,
      payload: response.data,
    });
  };

  const inputIngredient = (value) => {
    dispatch({
      type: INPUT_INGREDIENT,
      payload: value,
    });
  };
  const delIngredient = (value) => {
    dispatch({
      type: DEL_INGREDIENT,
      payload: value,
    });
  };

  const addIngredient2Ingredients = (value) => {
    if (!state.ingredients.includes(state.ingredient.trim())) {
      dispatch({
        type: SET_INGREDIENT,
        payload: value,
      });
    }
  };

  // const searchIngredient = async (value) => {
  //   setLoading();
  //   const response = await axios.get(
  //     `https://api.spoonacular.com/food/ingredients/autocomplete?apiKey=${spoonApiKey}&query=${value}&number=10`
  //   );
  //   dispatch({
  //     type: SEARCH_INGREDIENT,
  //     payload: response.data,
  //   });
  // };

  const searchRecipes = async () => {
    setLoading();
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${spoonApiKey}&ingredients=${state.ingredients.join(
        " "
      )}&number=12&ranking=2`
    );
    dispatch({
      type: SEARCH_RECIPES,
      payload: response.data,
    });
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  const { ingredient, ingredients, recipes, recipe, loading, fullRecipe } = state;

  return (
    <SpoonContext.Provider
      value={{
        setLoading,
        searchRecipes,
        addIngredient2Ingredients,
        //        searchIngredient,
        inputIngredient,
        delIngredient,
        getFullRecipe,
        ingredient,
        ingredients,
        recipes,
        recipe,
        fullRecipe,
        loading,
      }}
    >
      {children}
    </SpoonContext.Provider>
  );
};
