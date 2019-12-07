import React from "react";
import Avatars from "../Components/Avatars";
import Dropdowns from "../Components/Dropdowns";
import Buttons from "../Components/Buttons";
import Inputs from "../Components/Inputs";
import Modals from "../Components/Modals";
import Cards from "../Components/Cards";
import { Route, Switch } from "react-router-dom";

const Overview = () => {
  return (
    <div className="fx-grow-1 wptb--sm wplr--lg">
      <Switch>
        <Route exact path="/avatars" component={Avatars} />
        <Route exact path="/buttons" component={Buttons} />
        <Route path="/cards" component={Cards} />
        <Route path="/dropdowns" component={Dropdowns} />
        <Route path="/inputs" component={Inputs} />
        <Route path="/modals" component={Modals} />
      </Switch>
    </div>
  );
};

export default Overview;
