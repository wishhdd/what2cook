import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { UpBar } from "./components/upbar";
import { mainPage } from "./pages/main";
import { aboutPage } from "./pages/about";
import { SpoonState } from "./spoon/spoonState";
import "./global.css";

function App() {
  return (
    <SpoonState>
      <BrowserRouter basename={"/what2cook"}>
        <UpBar />
        <div>
          <Switch>
            <Route path={"/"} exact component={mainPage} />
            <Route path={"/about"} exact component={aboutPage} />
          </Switch>
        </div>
      </BrowserRouter>
    </SpoonState>
  );
}

export default App;
