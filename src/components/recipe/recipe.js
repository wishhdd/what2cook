import React, { useState } from "react";
import Icon from "@mdi/react";
import { mdiMore, mdiReload } from "@mdi/js";
import { FullRecipe } from "./fullRecipe";
import axios from "axios";

const missedIngredient = (missedIngredients) => {
  return missedIngredients.map((missedIngredient) => {
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

const spoonApiKey = process.env.REACT_APP_API_KEY;

const getFullRecipe = async (idRecipe) => {
  const response = await axios.get(
    `https://api.spoonacular.com/recipes/${idRecipe}/information?apiKey=${spoonApiKey}`
  );

  return response.data;
};

export const Recipe = ({ recipe }) => {
  const [fullRecipe, setFullRecipe] = useState({});
  const [fullRecipeLoading, isFullRecipeLoading] = useState(false);

  const sendID = async () => {
    isFullRecipeLoading(true);
    setFullRecipe(await getFullRecipe(recipe.id));
    isFullRecipeLoading(false);
  };
  return (
    <div className="card" style={{ width: 18 + "rem" }}>
      <img src={recipe.image} alt={recipe.title} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{recipe.title}</h5>
        {!fullRecipe.id ? <p className="card-text">you don't have enough:</p> : null}
      </div>
      {!fullRecipe.id ? (
        <ul className="list-group list-group-flush">
          {missedIngredient(recipe.missedIngredients)}
        </ul>
      ) : null}

      <div className="btn-group" role="group" aria-label="Basic outlined example">
        {fullRecipeLoading ? (
          <button type="button" className="btn btn-outline-warning">
            loading... <Icon path={mdiReload} title="loading" spin={true} size={1} />
          </button>
        ) : !fullRecipe.id ? (
          <button type="button" className="btn btn-outline-secondary" onClick={sendID}>
            learn more <Icon path={mdiMore} title="learn more" size={1} />
          </button>
        ) : (
          <FullRecipe fullRecipe={fullRecipe} />
        )}
      </div>
    </div>
  );
};
