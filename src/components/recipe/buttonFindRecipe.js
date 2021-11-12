import React, { useContext } from "react";
import Icon from "@mdi/react";
import { mdiFileFindOutline, mdiReload } from "@mdi/js";
import { SpoonContext } from "../../spoon/spoonContext";

export const ButtonFindRecipe = () => {
  const { loading, ingredients, searchRecipes } = useContext(SpoonContext);

  return (
    <div className="GeneralOneColor">
      {!ingredients.length ? null : loading ? (
        <button type="button" className="btn btn-load">
          <Icon path={mdiReload} title="loading" spin={true} size={1} /> looking for recipes
        </button>
      ) : (
        <button type="button" className="btn btn-Find" onClick={searchRecipes}>
          <Icon path={mdiFileFindOutline} title="Find recipe" size={1} /> Find recipe
        </button>
      )}
    </div>
  );
};
