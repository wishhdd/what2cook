import React, { useContext, useState } from "react";
import Icon from "@mdi/react";
import { mdiFoodVariant } from "@mdi/js";
import { SpoonContext } from "../spoon/spoonContext";

export const Search = () => {
  const [placeholder, setPlaceholder] = useState("What do you have?");

  const spoon = useContext(SpoonContext);

  const inputValue = (event) => {
    //console.log(value);
    //spoon.inputIngredient(value.trim());
    if (event.key === "Enter") {
      if (spoon.ingredient) {
        spoon.addIngredient2Ingredients(spoon.ingredient.trim());
        //console.log(spoon);
        spoon.inputIngredient("");
      }
    }

    if (!spoon.ingredient.trim()) {
      setPlaceholder("write an indigenous, then that we could look for something");
    }
  };

  return (
    <div className="input-group input-group-sm mb-3">
      <span className="input-group-text" id="inputGroup-sizing-sm">
        <Icon path={mdiFoodVariant} title="Ingredients" size={1} />
      </span>
      <input
        type="text"
        className="form-control"
        aria-describedby="inputGroup-sizing-sm"
        placeholder={placeholder}
        value={spoon.ingredient}
        onChange={(event) => spoon.inputIngredient(event.target.value)}
        onKeyUp={inputValue}
      />
    </div>
  );
};
// onChange={(event) => setValue(event.target.value)}
// onKeyPress={inputValue}
