import React from "react";
import Icon from "@mdi/react";
import { mdiArrowDownBold } from "@mdi/js";

export const ButtonFindRecipe = () => {
  return (
    <div className="d-grid gap-1">
      <button type="button" className="btn btn-outline-primary">
        <Icon path={mdiArrowDownBold} title="Find recipe" size={1} /> Find recipe
      </button>
    </div>
  );
};
