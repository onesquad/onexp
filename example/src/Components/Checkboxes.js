import React, { useState } from "react";
import { Checkbox, Text } from "onexp";

const Checkboxes = () => {
  const [error, setError] = useState(false);
  return (
    <div className="xp-animate--fadeIn">
      <Text size="jumbo" weight="bold" extraClass="mb--lg">
        Checkbox
      </Text>
      <div className="fx-row mb--lg">
        <Checkbox error={error} label="User name" name="01" />
      </div>
    </div>
  );
};

export default Checkboxes;
