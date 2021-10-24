import React from "react";
import { Recipes } from "../components/recipes";
import { Search } from "../components/search";
import { Ingredients } from "../components/ingredients";
import { ButtonAddIngredient } from "../components/buttonAddIngredient";
import { ButtonFindRecipe } from "../components/buttonFindRecipe";

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
