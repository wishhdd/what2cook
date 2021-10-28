import React, { useContext } from "react";
import Icon from "@mdi/react";
import { mdiFileFindOutline } from "@mdi/js";
import { SpoonContext } from "../../spoon/spoonContext";

export const ButtonFindRecipe = () => {
  const { ingredients, searchRecipes } = useContext(SpoonContext);

  return (
    <div className="d-grid gap-1">
      {!ingredients.length ? null : (
        <button type="button" className="btn btn-outline-primary" onClick={searchRecipes}>
          <Icon path={mdiFileFindOutline} title="Find recipe" size={1} /> Find recipe
        </button>
      )}
    </div>
  );
};
