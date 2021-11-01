import React, { useState } from "react";
import Icon from "@mdi/react";
import { SummaryUpBar } from "./summaryUpBar";
import { mdiChefHat, mdiTextLong } from "@mdi/js";

const delHTMLTag = (html) => {
  return html.replace(/<[^>]+>/g, "");
};

export const FullRecipe = ({ fullRecipe }) => {
  const [descriptionText, setDescriptionText] = useState(fullRecipe.summary);
  const [activeButton, setActiveButton] = useState({ summary: "active", instructions: "" });
  const setSummary = () => {
    setDescriptionText(fullRecipe.summary);
    setActiveButton({ summary: "active", instructions: "" });
  };

  const setInstructions = () => {
    setDescriptionText(fullRecipe.instructions);
    setActiveButton({ summary: "", instructions: "active" });
  };

  return (
    <div>
      <div className="d-grid">
        <div className="btn-group">
          <button
            type="button"
            className={`btn btn-outline-secondary ${activeButton.summary}`}
            onClick={setSummary}
          >
            <Icon path={mdiTextLong} title="Summary" size={1} />
            Summary
          </button>
          <button
            type="button"
            className={`btn btn-outline-secondary ${activeButton.instructions}`}
            onClick={setInstructions}
          >
            <Icon path={mdiChefHat} title="Instructions" size={1} />
            Instructions
          </button>
        </div>
      </div>

      <SummaryUpBar fullRecipe={fullRecipe} />

      {activeButton.summary ? (
        <div dangerouslySetInnerHTML={{ __html: delHTMLTag(descriptionText) }} />
      ) : null}
      {activeButton.instructions ? (
        <div dangerouslySetInnerHTML={{ __html: descriptionText }} />
      ) : null}
    </div>
  );
};
