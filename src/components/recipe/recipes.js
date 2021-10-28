import React, { useContext } from "react";
import { Recipe } from "./recipe";
import { SpoonContext } from "../../spoon/spoonContext";

export const Recipes = () => {
  const { recipes } = useContext(SpoonContext);
  //console.log(recipes.data.length);

  return (
    <div className="row">
      {!recipes
        ? null
        : recipes.map((recipe) => {
            return (
              <div key={recipe.id} className="col mb-4">
                <Recipe recipe={recipe} />
              </div>
            );
          })}
    </div>
  );
};
