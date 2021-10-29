import React, { useState } from "react";
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
  mdiChefHat,
  mdiTextLong,
} from "@mdi/js";

const getColor = (value) => {
  let hue = value * 1.2;
  return ["hsl(", hue, ",100%,50%)"].join("");
};

const delHTMLTag = (html) => {
  return html.replace(/<[^>]+>/g, "");
};

const si = (event) => {
  console.log(event.target.title);
};

export const FullRecipe = ({ fullRecipe }) => {
  //const [descriptionText, setDescriptionText] = useState(fullRecipe.summary);

  return (
    <div>
      <div className="d-grid">
        <div className="btn-group">
          <button type="button" className="btn btn-outline-secondary active" onClick={si}>
            <Icon path={mdiTextLong} title="Summary" size={1} />
            Summary
          </button>
          <button type="button" className="btn btn-outline-secondary">
            <Icon path={mdiChefHat} title="Instructions" size={1} />
            Instructions
          </button>
        </div>
      </div>
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
      <div dangerouslySetInnerHTML={{ __html: delHTMLTag(fullRecipe.summary) }} />
    </div>
  );
};
