import React, { useContext } from "react";
import { SpoonContext } from "../spoon/spoonContext";
import Icon from "@mdi/react";
import { mdiMore } from "@mdi/js";

const missedIngredient = (missedIngredients) => {
  return missedIngredients.map((missedIngredient) => {
    //console.log(missedIngredient);
    return (
      <li className="list-group-item" key={missedIngredient.id}>
        {missedIngredient.name}
        <img
          height={30 + "rem"}
          src={missedIngredient.image}
          alt={missedIngredient.name}
          className="rounded float-end"
        />
      </li>
    );
  });
};

export const Recipe = ({ recipe }) => {
  const { getRecipe } = useContext(SpoonContext);
  let learnMore = true;
  const sendID = () => {
    //getRecipe(recipe.id);
  };
  return (
    <div className="card" style={{ width: 18 + "rem" }}>
      <img src={recipe.image} alt={recipe.title} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{recipe.title}</h5>
        <p className="card-text">you don't have enough:</p>
      </div>
      <ul className="list-group list-group-flush">{missedIngredient(recipe.missedIngredients)}</ul>
      <div className="btn-group" role="group" aria-label="Basic outlined example">
        <button type="button" className="btn btn-outline-secondary" onClick={sendID}>
          learn more <Icon path={mdiMore} title="learn more" size={1} />
        </button>
      </div>
    </div>
  );
};
