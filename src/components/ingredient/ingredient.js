import React, { useContext } from "react";
import { SpoonContext } from "../../spoon/spoonContext";
import Icon from "@mdi/react";
import { mdiDeleteOutline } from "@mdi/js";

//import { mongoBDStart } from "../connectMongoBD"; пока рано

export const Ingredient = ({ ingredientItem }) => {
  //mongoBDStart(); пока рано
  const { delIngredient, ingredient } = useContext(SpoonContext);
  const delIngredienBt = () => {
    delIngredient(ingredientItem);
  };

  const ingredientColour =
    ingredientItem === ingredient ? " ingredientItem-bed" : " ingredientItem-Ok";
  return (
    <div className={`ingredientItem ${ingredientColour}`}>
      {ingredientItem}
      <Icon
        path={mdiDeleteOutline}
        title="delete ingredient"
        size={0.5}
        onClick={delIngredienBt}
        className="btn-del"
      />
    </div>
  );
};
