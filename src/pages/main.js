import React from "react";
import { Recipes } from "../components/recipe/recipes";
import { Search } from "../components/ingredient/searchIngredient";
import { Ingredients } from "../components/ingredient/ingredients";
import { ButtonAddIngredient } from "../components/ingredient/buttonAddIngredient";
import { ButtonFindRecipe } from "../components/recipe/buttonFindRecipe";

export const mainPage = () => {
  return (
    <>
      <Search />
      <ButtonAddIngredient />
      <Ingredients />
      <ButtonFindRecipe />
      <Recipes />
    </>
  );
};
