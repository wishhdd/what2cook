import React, { useContext } from "react";
import { Ingredient } from "./ingredient";
import { SpoonContext } from "../../spoon/spoonContext";

export const Ingredients = () => {
  const { loading, ingredients } = useContext(SpoonContext);

  return (
    <div className="row">
      {loading ? (
        <p>Загрузка...</p>
      ) : (
        ingredients.map((ingredient) => {
          return (
            <div key={ingredient} className="col">
              <Ingredient ingredientItem={ingredient} />
            </div>
          );
        })
      )}
    </div>
  );
};
