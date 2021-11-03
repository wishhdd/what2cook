import React from "react";
import Icon from "@mdi/react";
import {
  mdiSquareCircle,
  mdiBarleyOff,
  mdiHeartPlus,
  mdiCurrencyUsdOff,
  mdiAccountGroupOutline,
  mdiCow,
  mdiSilverwareSpoon,
  mdiBottleTonicPlusOutline,
  mdiTimer,
} from "@mdi/js";

const getColor = (value) => {
  let hue = value * 1.2;
  return ["hsl(", hue, ",100%,50%)"].join("");
};

export const SummaryUpBar = ({ fullRecipe }) => {
  return (
    <>
      {fullRecipe.vegetarian || fullRecipe.vegan ? (
        <Icon path={mdiSquareCircle} title="vegetarian and vegan" size={1} />
      ) : null}
      {fullRecipe.glutenFree ? <Icon path={mdiBarleyOff} title="gluten free" size={1} /> : null}
      {fullRecipe.dairyFree ? <Icon path={mdiCow} title="dairy free" size={1} /> : null}
      {fullRecipe.veryHealthy ? <Icon path={mdiHeartPlus} title="very healthy" size={1} /> : null}
      {fullRecipe.cheap ? <Icon path={mdiCurrencyUsdOff} title="cheap" size={1} /> : null}
      {fullRecipe.veryPopular ? (
        <Icon path={mdiAccountGroupOutline} title="very popular" size={1} />
      ) : null}
      <span title="spoonacular score" style={{ color: getColor(fullRecipe.spoonacularScore) }}>
        <Icon path={mdiSilverwareSpoon} title="spoonacular score" size={0.8} />
        {fullRecipe.spoonacularScore}
      </span>
      <span title="health score" style={{ color: getColor(fullRecipe.healthScore) }}>
        <Icon path={mdiBottleTonicPlusOutline} title="health score" size={0.8} />
        {fullRecipe.healthScore}
      </span>
      <span title="ready in minutes">
        <Icon path={mdiTimer} title="ready in minutes" size={0.8} />:{fullRecipe.readyInMinutes}min
      </span>
    </>
  );
};
