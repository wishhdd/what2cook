import React from "react";

const roundMl = (amount) => {
  return (amount = Math.round(amount));
};

export const ExtendedIngredients = ({ extendedIngredients }) => {
  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item" align="center">
          You will need:
        </li>
        {extendedIngredients.map((ingredient) => {
          return (
            <li
              className="list-group-item"
              key={ingredient.name}
              style={{ verticalAlign: "center" }}
            >
              {ingredient.measures.metric.unitShort !== "ml"
                ? `${ingredient.name} ${ingredient.measures.metric.amount}
       ${ingredient.measures.metric.unitShort}`
                : `${ingredient.name} ${roundMl(ingredient.measures.metric.amount)}
       ${ingredient.measures.metric.unitShort}`}
              {ingredient.image ? (
                <img
                  style={{ height: 3 + "rem", width: "auto", alignItems: "center" }}
                  src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
                  alt={ingredient.name}
                  title={ingredient.originalString}
                  className="rounded float-end"
                />
              ) : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
