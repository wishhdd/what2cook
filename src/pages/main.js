import React from "react";
import { Cards } from "../components/cards";
import { Search } from "../components/search";
import { Ingredients } from "../components/ingredients";
import { Button } from "../components/button";

export const mainPage = () => {
  return (
    <>
      <Search />
      <Button />
      <Ingredients />
      <Cards />
    </>
  );
};
