import React, { useContext } from "react";
import { Ingredient } from "./ingredient";
import { SpoonContext } from "../spoon/spoonContext";

export const Ingredients = () => {
  //const ingredients2 = new Array(8).fill("").map((_, i) => i);

  const { loading, ingredients } = useContext(SpoonContext);

  //console.log(indigrients);

  return (
    <div className="row">
      {loading ? (
        <p>Загрузка...</p>
      ) : (
        ingredients.map((ingredient) => {
          //console.log(indigrient.name);
          return (
            <div key={ingredient} className="col">
              <Ingredient ingredient={ingredient} />
            </div>
          );
        })
      )}
    </div>
  );
};
