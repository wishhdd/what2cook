import React, { useReducer } from "react";
import { SpoonContext } from "./spoonContext";
import { spoonReducer } from "./spoonReducer";
import {
  SEARCH_INGREDIENT,
  SEARCH_RECIPES,
  SET_LOADING,
  SET_INGREDIENT,
  SELELCT_INGREDIENT,
  CLEAR_INGREDIENT,
} from "./types";
import axios from "axios";

const spoonApyKey = process.env.REACT_APP_APY_KEY;

export const SpoonState = ({ children }) => {
  const startState = {
    ingredient: "",
    ingredients: [],
    loading: false,
    recipes: [],
  };

  const [state, dispatch] = useReducer(spoonReducer, startState);

  const selectIngredient = (value) => {
    console.log(value);
    dispatch({
      type: SELELCT_INGREDIENT,
      payload: value,
    });
  };

  const addIngredient2Ingredients = () => {
    //console.log(value);
    dispatch({
      type: SET_INGREDIENT,
      //payload: value,
    });
  };

  const searchIngredient = async (value) => {
    setLoading();
    const response = await axios.get(
      `https://api.spoonacular.com/food/ingredients/autocomplete?apiKey=${spoonApyKey}&query=${value}&number=10`
    );
    dispatch({
      type: SEARCH_INGREDIENT,
      payload: response.data,
    });
  };

  const searchRecipes = async (indigrients) => {
    setLoading();
    dispatch({
      type: SEARCH_RECIPES,
      payload: [],
    });
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  const { ingredient, ingredients, recipes, loading } = state;

  return (
    <SpoonContext.Provider
      value={{
        setLoading,
        searchRecipes,
        addIngredient2Ingredients,
        searchIngredient,
        selectIngredient,
        ingredient,
        ingredients,
        recipes,
        loading,
      }}
    >
      {children}
    </SpoonContext.Provider>
  );
};
