import React from "react";
import { Radio, Text } from "onexp";

const Radios = () => {
  return (
    <div className="xp-animate--fadeIn">
      <Text size="jumbo" weight="bold" extraClass="mb--lg">
        Radio
      </Text>
      <div className="fx-row mb--lg">
        <Radio>
          <Radio.Item name="branding" label="1" />
          <Radio.Item name="branding" label="2" />
          <Radio.Item name="branding" label="3" />
        </Radio>
      </div>
    </div>
  );
};

export default Radios;
