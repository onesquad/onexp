import React, { useState } from "react";
import { Dropdown, Text, Avatar } from "onexp";

const Dropdowns = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="xp-animate--fadeIn">
      <Text size="jumbo" weight="bold" extraClass="mb--lg">
        Dropdowns
      </Text>
      <div className="fx-row mb--lg">
        <Dropdown
          target={
            <Avatar
              interactive
              image="https://avatars1.githubusercontent.com/u/199754?s=460&v=4"
            />
          }
          position="bottom"
        >
          <Dropdown.Heading>Heyyyy</Dropdown.Heading>
        </Dropdown>
      </div>
    </div>
  );
};

export default Dropdowns;
