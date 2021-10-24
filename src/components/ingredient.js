import React, { useContext } from "react";
import { SpoonContext } from "../spoon/spoonContext";
// import Icon from "@mdi/react";
// import { mdiDeleteOutline } from "@mdi/js";

export const Ingredient = ({ ingredientItem }) => {
  const { delIngredient, ingredient } = useContext(SpoonContext);
  const delIngredienBt = () => {
    delIngredient(ingredientItem);
  };

  const ingredientColour = ingredientItem === ingredient ? " alert-danger" : " alert-secondary";
  return (
    <div className={`alert  ${ingredientColour} alert-dismissible`}>
      {ingredientItem}
      <button
        type="button"
        className="btn-close"
        aria-label="Close"
        onClick={delIngredienBt}
      ></button>
    </div>
  );
};
//        <Icon path={mdiDeleteOutline} title="delete ingredient " size={1} />
