import React, { useContext } from "react";
import Icon from "@mdi/react";
import { mdiArrowDownBold } from "@mdi/js";
import { SpoonContext } from "../spoon/spoonContext";

export const Button = () => {
  const spoon = useContext(SpoonContext);

  const addIngredient = () => {
    spoon.addIngredient2Ingredients();
    console.log(spoon);
    //spoon.selectIngredient("");
  };

  return (
    <div className="d-grid gap-1">
      <button type="button" className="btn btn-outline-success" onClick={addIngredient}>
        <Icon path={mdiArrowDownBold} title="add to recipe" size={1} /> Add to recipe
      </button>
    </div>
  );
};
