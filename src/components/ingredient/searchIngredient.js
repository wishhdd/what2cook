import React, { useContext, useState } from "react";
import Icon from "@mdi/react";
import { mdiFoodVariant } from "@mdi/js";
import { SpoonContext } from "../../spoon/spoonContext";

export const Search = () => {
  const [placeholder, setPlaceholder] = useState("What do you have?");

  const spoon = useContext(SpoonContext);

  const inputValue = (event) => {
    if (event.key === "Enter") {
      if (spoon.ingredient) {
        spoon.addIngredient2Ingredients(spoon.ingredient.trim());
        spoon.inputIngredient("");
      }
    }
    if (!spoon.ingredient.trim()) {
      setPlaceholder("write an indigenous, then that we could look for something");
    }
  };

  return (
    <div className="GeneralOneColor">
      <div className="InputDiv">
        <Icon path={mdiFoodVariant} title="Ingredients" size={1} />

        <input
          type="text"
          className="InputField"
          placeholder={placeholder}
          value={spoon.ingredient}
          onChange={(event) => spoon.inputIngredient(event.target.value)}
          onKeyUp={inputValue}
        />
      </div>
    </div>
  );
};
