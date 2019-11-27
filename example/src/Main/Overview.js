import React from "react";
import Buttons from "../Components/Buttons";
import Inputs from "../Components/Inputs";
import { Route, Switch } from "react-router-dom";

const Overview = () => {
  return (
    <div className="fx-grow-1 wptb--sm wplr--lg">
      <Switch>
        <Route exact path="/buttons" component={Buttons} />
        <Route path="/inputs" component={Inputs} />
      </Switch>
    </div>
  );
};

export default Overview;
