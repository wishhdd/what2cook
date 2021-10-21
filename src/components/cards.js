import React from "react";
import { Card } from "../components/card";

export const Cards = () => {
  const cards = new Array(8).fill("").map((_, i) => i);

  return (
    <div className="row">
      {cards.map((card) => {
        return (
          <div key={card} className="col mb-4">
            <Card />
          </div>
        );
      })}
    </div>
  );
};
