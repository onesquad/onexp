import React from "react";
import { RadioGroup, Radio, Text } from "onexp";

const Radios = () => {
  return (
    <div className="xp-animate--fadeIn">
      <Text size="jumbo" weight="bold" extraClass="mb--lg">
        Radio
      </Text>
      <div className="fx-row mb--lg">
        <RadioGroup>
          <Radio name="branding" label="OneSquad" />
          <Radio name="branding" label="Basecamp" />
          <Radio name="branding" label="Slack" />
        </RadioGroup>
      </div>
    </div>
  );
};

export default Radios;
