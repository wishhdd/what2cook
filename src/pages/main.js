import React from "react";
import { Cards } from "../components/cards";
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
      <Cards />
    </>
  );
};
