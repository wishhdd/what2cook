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
  const [activeButton, setActiveButton] = useState({
    summary: "btn-group-left-action",
    instructions: "",
  });
  const focusEl = useRef(null);
  const setSummary = () => {
    setDescriptionText(fullRecipe.summary);
    setActiveButton({
      summary: "btn-group-left-action btn-main-gradient",
      instructions: "",
      stepByStep: "",
    });
    focusEl.current.focus();
  };

  const setInstructions = () => {
    if (fullRecipe.instructions) {
      setDescriptionText(fullRecipe.instructions);
    } else {
      setDescriptionText("Sorry, instructions are not available. We hope to add it later.");
    }
    setActiveButton({
      summary: "",
      instructions: "btn-group-right-action btn-main-gradient",
      stepByStep: "",
    });
    focusEl.current.focus();
  };

  const setStepByStep = () => {
    setActiveButton({ summary: "", instructions: "", stepByStep: "set" });
    focusEl.current.focus();
  };

  return (
    <div className="">
      <div className="btn-group">
        <button
          type="button"
          className={`btn btn-group-left btn-main-gradient ${activeButton.summary}`}
          onClick={setSummary}
        >
          <Icon path={mdiTextLong} title="Summary" size={1} />
          &nbsp;Summary
        </button>
        <button
          type="button"
          className={`btn btn-group-right btn-main-gradient ${activeButton.instructions}`}
          onClick={setInstructions}
          ref={focusEl}
        >
          <Icon path={mdiChefHat} title="Instructions" size={1} />
          &nbsp;Instructions
        </button>
      </div>

      {activeButton.summary ? (
        <div>
          <SummaryUpBar fullRecipe={fullRecipe} />
          <div
            className="simple-text"
            dangerouslySetInnerHTML={{ __html: delHTMLTag(descriptionText) }}
          />
        </div>
      ) : null}

      {activeButton.instructions ? (
        <div className="card-text">
          You will need:
          <ExtendedIngredients extendedIngredients={fullRecipe.extendedIngredients} />
          <div className="simple-text" dangerouslySetInnerHTML={{ __html: descriptionText }} />
          {fullRecipe.analyzedInstructions.length ? (
            <button
              type="button"
              className="btn btn-single btn-lm"
              onClick={setStepByStep}
              disabled={!fullRecipe.analyzedInstructions.length}
            >
              Step-by-step instructions
              <Icon path={mdiBookPlayOutline} title="Step-by-step instructions" size={1} />
            </button>
          ) : null}
        </div>
      ) : null}

      {activeButton.stepByStep ? (
        <AnalyzedInstructions analyzedInstructions={fullRecipe.analyzedInstructions} />
      ) : null}
    </div>
  );
};
