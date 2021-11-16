import React, { useContext } from "react";
import { Recipe } from "./recipe";
import { SpoonContext } from "../../spoon/spoonContext";

export const Recipes = () => {
  const { recipes } = useContext(SpoonContext);

  return (
    <div className="row GeneralOneColor">
      {!recipes.length
        ? "Sorry, nothing was found with such a set."
        : recipes.map((recipe) => {
            return (
              <div key={recipe.id} className="col">
                <Recipe recipe={recipe} />
              </div>
            );
          })}
    </div>
  );
};
