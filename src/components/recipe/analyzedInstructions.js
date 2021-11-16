import React, { useState } from "react";
import Icon from "@mdi/react";
import { mdiBookPlayOutline, mdiStepForward, mdiStepBackward } from "@mdi/js";

export const AnalyzedInstructions = ({ analyzedInstructions }) => {
  const [step, setStep] = useState(0);

  return (
    <div>
      <button type="button" className="btn btn-active btn-main-gradient">
        Step-by-step instructions
        <Icon path={mdiBookPlayOutline} title="Step-by-step instructions" size={1} />
      </button>

      <div className="btn-group">
        <button
          type="button"
          className="btn btn-group-left btn-main-gradient"
          onClick={() => setStep(step - 1)}
          disabled={step === 0}
        >
          <Icon path={mdiStepBackward} title="Step Backward" size={1} />
        </button>
        <div className="btn btn-group-centre">
          {`Step ${step + 1} of ${analyzedInstructions[0].steps.length}`}
        </div>
        <button
          type="button"
          className="btn btn-group-right btn-main-gradient"
          onClick={() => setStep(step + 1)}
          disabled={step === analyzedInstructions[0].steps.length - 1}
        >
          <Icon path={mdiStepForward} title="Step Forward" size={1} />
        </button>
      </div>
      <div className="simple-text">{analyzedInstructions[0].steps[step].step}</div>
      <div>
        {analyzedInstructions[0].steps[step].equipment.length ? (
          <div className="list-EI">
            Equipments:
            {analyzedInstructions[0].steps[step].equipment.map((equipment) => {
              return (
                <span key={equipment.name}>
                  <img
                    className="img-EI"
                    src={`https://spoonacular.com/cdn/equipment_100x100/${equipment.image}`}
                    alt={equipment.name}
                    title={equipment.name}
                  />
                </span>
              );
            })}
          </div>
        ) : null}
        {analyzedInstructions[0].steps[step].ingredients.length ? (
          <div className="list-EI">
            Ingredients:
            {analyzedInstructions[0].steps[step].ingredients.map((ingredient) => {
              if (ingredient.image) {
                return (
                  <img
                    key={ingredient.name}
                    className="img-EI"
                    src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
                    alt={ingredient.name}
                    title={ingredient.name}
                  />
                );
              }
              return null;
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
};
