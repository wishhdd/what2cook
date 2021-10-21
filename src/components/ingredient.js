import React from "react";

export const Ingredient = ({ ingredient }) => {
  //console.log(ingredient.name);
  return (
    <div className={`alert alert-secondary alert-dismissible`}>
      {ingredient}
      <button type="button" className="btn-close" aria-label="Close" />
    </div>
  );
};
