import React from "react";
import Alerts from "../Components/Alerts";
import Avatars from "../Components/Avatars";
import Dropdowns from "../Components/Dropdowns";
import Buttons from "../Components/Buttons";
import Inputs from "../Components/Inputs";
import Modals from "../Components/Modals";
import Cards from "../Components/Cards";
import Select from "../Components/Select";
import Checkboxes from "../Components/Checkboxes";
import Radios from "../Components/Radios";
import Switch from "../Components/Switch";
import { Route, Switch as RouterSwitch } from "react-router-dom";

const Overview = () => {
  return (
    <div className="fx-grow-1 wptb--sm wplr--lg">
      <RouterSwitch>
        <Route exact path="/alerts" component={Alerts} />
        <Route exact path="/avatars" component={Avatars} />
        <Route exact path="/buttons" component={Buttons} />
        <Route path="/cards" component={Cards} />
        <Route path="/dropdowns" component={Dropdowns} />
        <Route path="/inputs" component={Inputs} />
        <Route path="/modals" component={Modals} />
        <Route path="/select" component={Select} />
        <Route path="/checkboxes" component={Checkboxes} />
        <Route path="/radios" component={Radios} />
        <Route path="/switch" component={Switch} />
      </RouterSwitch>
    </div>
  );
};

export default Overview;
