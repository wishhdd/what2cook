import React, { useContext } from "react";
import { Ingredient } from "./ingredient";
import { SpoonContext } from "../../spoon/spoonContext";

export const Ingredients = () => {
  const { ingredients } = useContext(SpoonContext);

  return (
    <div className="row GeneralOneColor">
      {ingredients.map((ingredient) => {
        return (
          <div key={ingredient} className="col">
            <Ingredient ingredientItem={ingredient} />
          </div>
        );
      })}
    </div>
  );
};
