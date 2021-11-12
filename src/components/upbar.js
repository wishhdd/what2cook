import React from "react";
import Icon from "@mdi/react";
import { mdiCookie, mdiInformationVariant, mdiViewList } from "@mdi/js";
import { NavLink } from "react-router-dom";

export const UpBar = () => (
  <nav>
    <div className="NavMenu">
      <div className="Log">
        <Icon path={mdiCookie} title="What to cook" size={1.2} />
        What to cook
      </div>
      <ul>
        <li className="ulLine">
          <NavLink exact to="/">
            <Icon path={mdiViewList} title="to recipes" size={1} className="Link" />
          </NavLink>
        </li>
        <li className="ulLine">
          <NavLink to="/about">
            <Icon path={mdiInformationVariant} title="info" size={1} className="Link" />
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);
