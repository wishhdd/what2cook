import React, { useContext } from "react";
import { Card } from "../components/card";
import { SpoonContext } from "../spoon/spoonContext";

export const Cards = () => {
  const cards = new Array(8).fill("").map((_, i) => i);
  const { recipes } = useContext(SpoonContext);

  return (
    <div className="row">
      {recipes
        ? null
        : cards.map((card) => {
            return (
              <div key={card} className="col mb-4">
                <Card />
              </div>
            );
          })}
    </div>
  );
};
