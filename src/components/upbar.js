import React from "react";
import Icon from "@mdi/react";
import { mdiCookie } from "@mdi/js";
import { NavLink } from "react-router-dom";

export const UpBar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <div className="navbar-brand">
        <Icon path={mdiCookie} title="What to cook" size={1.2} />
        What to cook
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink exact to="/" className="nav-link">
            Main
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);
