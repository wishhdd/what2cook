import React from "react";

import Icon from "@mdi/react";
import { mdiGithub } from "@mdi/js";

export const aboutPage = () => {
  return (
    <div className="General">
      <div className="Title">About what to cook</div>
      <div className="Body">
        If you don't know what to cook, specify what you have and the service will offer you what
        you can cook from it. If there are not enough ingredients, he will offer to buy the
        necessary things to cook something delicious.
        <div className="PS">
          If anything, write me to
          <a href="https://github.com/wishhdd/what2cook" rel="noreferrer" target="_blank">
            <Icon path={mdiGithub} title="Github" size={0.8} className="Link" />
          </a>
        </div>
      </div>
    </div>
  );
};
