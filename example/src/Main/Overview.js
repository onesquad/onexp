import React from "react";
import Avatars from "../Components/Avatars";
import Buttons from "../Components/Buttons";
import Inputs from "../Components/Inputs";
import Cards from "../Components/Cards";
import { Route, Switch } from "react-router-dom";

const Overview = () => {
  return (
    <div className="fx-grow-1 wptb--sm wplr--lg">
      <Switch>
        <Route exact path="/avatars" component={Avatars} />
        <Route exact path="/buttons" component={Buttons} />
        <Route path="/inputs" component={Inputs} />
        <Route path="/cards" component={Cards} />
        <Route path="/cards" component={Cards} />
      </Switch>
    </div>
  );
};

export default Overview;
