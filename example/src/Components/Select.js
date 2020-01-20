import React, { useState } from "react";
import { Select, Text } from "onexp";

const Modals = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" }
  ];
  const [value, setValue] = useState(options[1]);
  return (
    <div className="xp-animate--fadeIn">
      <Text size="jumbo" weight="bold" extraClass="mb--lg">
        Modals
      </Text>
      <div className="grid grid-nogutter">
        <div className="col col-3">
          <Select options={options} value={value} onChange={setValue} />
        </div>
      </div>
    </div>
  );
};

export default Modals;
