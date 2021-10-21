import React, { useContext } from "react";
import Icon from "@mdi/react";
import { mdiArrowDownBold } from "@mdi/js";
import { SpoonContext } from "../spoon/spoonContext";

export const Button = () => {
  const spoon = useContext(SpoonContext);

  const addIngredient = () => {
    if (spoon.ingredient) {
      spoon.addIngredient2Ingredients();
      spoon.inputIngredient("");
    }
  };

  return (
    <div className="d-grid gap-1">
      <button
        type="button"
        className="btn btn-outline-success"
        onClick={addIngredient}
        disabled={!spoon.ingredient}
      >
        <Icon path={mdiArrowDownBold} title="add to recipe" size={1} /> Add to recipe
      </button>
    </div>
  );
};
