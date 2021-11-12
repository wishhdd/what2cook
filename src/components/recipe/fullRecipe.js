import React, { useState, useRef } from "react";
import { SummaryUpBar } from "./summaryUpBar";
import { ExtendedIngredients } from "./extendedIngredients";
import Icon from "@mdi/react";
import { mdiChefHat, mdiTextLong, mdiBookPlayOutline } from "@mdi/js";
import { AnalyzedInstructions } from "./analyzedInstructions";

const delHTMLTag = (html) => {
  return html.replace(/<[^>]+>/g, "");
};

export const FullRecipe = ({ fullRecipe }) => {
  const [descriptionText, setDescriptionText] = useState(fullRecipe.summary);
  const [activeButton, setActiveButton] = useState({ summary: "active", instructions: "" });
  const focusEl = useRef(null);
  const setSummary = () => {
    setDescriptionText(fullRecipe.summary);
    setActiveButton({ summary: "active", instructions: "", stepByStep: "" });
    focusEl.current.focus();
  };

  const setInstructions = () => {
    if (fullRecipe.instructions) {
      setDescriptionText(fullRecipe.instructions);
    } else {
      setDescriptionText("Sorry, instructions are not available. We hope to add it later.");
    }
    setActiveButton({ summary: "", instructions: "active", stepByStep: "" });
    focusEl.current.focus();
  };

  const setStepByStep = () => {
    setActiveButton({ summary: "", instructions: "", stepByStep: "active" });
    focusEl.current.focus();
  };

  return (
    <div>
      <div className="">
        <div className="btn-group">
          <button
            type="button"
            className={`btn btn-group-left ${activeButton.summary} `}
            onClick={setSummary}
          >
            <Icon path={mdiTextLong} title="Summary" size={1} />
            &nbsp;Summary
          </button>
          <button
            type="button"
            className={`btn btn-group-right ${activeButton.instructions}`}
            onClick={setInstructions}
            ref={focusEl}
          >
            <Icon path={mdiChefHat} title="Instructions" size={1} />
            &nbsp;Instructions
          </button>
        </div>
      </div>

      {activeButton.summary ? (
        <div className="">
          <SummaryUpBar fullRecipe={fullRecipe} />
          <div dangerouslySetInnerHTML={{ __html: delHTMLTag(descriptionText) }} />
        </div>
      ) : null}
      {activeButton.instructions ? (
        <div className="d-grid gap-1">
          <ExtendedIngredients extendedIngredients={fullRecipe.extendedIngredients} />
          <div dangerouslySetInnerHTML={{ __html: descriptionText }} />
          <button
            type="button"
            className="btn btn-outline-info"
            onClick={setStepByStep}
            disabled={!fullRecipe.analyzedInstructions.length}
          >
            Step-by-step instructions
            <Icon path={mdiBookPlayOutline} title="Step-by-step instructions" size={1} />
          </button>
        </div>
      ) : null}
      {activeButton.stepByStep ? (
        <div className="d-grid gap-1">
          <AnalyzedInstructions analyzedInstructions={fullRecipe.analyzedInstructions} />
        </div>
      ) : null}
    </div>
  );
};
