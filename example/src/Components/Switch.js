import React from "react";
import { Switch, Text } from "onexp";
import { Button } from "@blueprintjs/core";
const Switchs = () => {
  return (
    <div className="xp-animate--fadeIn">
      <Text size="jumbo" weight="bold" extraClass="mb--lg">
        Switch
      </Text>
      <div className="mb--lg">
        <Switch checked />
        <Switch />
        <Switch label="Show drafts" />
        <Switch
          className="fx-inline-block"
          label="Show drafts"
          alignIndicator="right"
        />
      </div>
    </div>
  );
};

export default Switchs;
