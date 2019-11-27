import React, { useState } from "react";
import { Input, Text } from "onexp";

const Inputs = () => {
  const [error, setError] = useState(false);
  return (
    <div className="xp-animate--fadeIn">
      <Text size="jumbo" weight="bold" extraClass="mb--lg">
        Inputs
      </Text>
      <div className="fx-row mb--lg">
        <Input error={error} label="User name" placeholder="Enter your name" />
      </div>
    </div>
  );
};

export default Inputs;
