import React, { useState } from "react";
import { Dropdown, Text, Avatar } from "onexp";

const Dropdowns = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="xp-animate--fadeIn">
      <Text size="jumbo" weight="bold" extraClass="mb--lg">
        Dropdowns
      </Text>
      <div className="fx-row mb--lg wpl--xl">
        <Dropdown
          target={
            <div className="fx-row fx-ai--center pointer--cursor">
              <Avatar
                interactive
                image="https://avatars1.githubusercontent.com/u/199754?s=460&v=4"
              />
              <i class="ri-arrow-down-s-line ri-lg"></i>
            </div>
          }
          position="bottom"
        >
          <>
            {/* <Dropdown.Heading>Vinay Chandran</Dropdown.Heading> */}
            <Dropdown.Link>Account settings</Dropdown.Link>
            <Dropdown.Link>Organization settings</Dropdown.Link>
            <Dropdown.Divider />
            <Dropdown.Link>Usage status</Dropdown.Link>
            <Dropdown.Link>Billing</Dropdown.Link>
            <Dropdown.Divider />
            <Dropdown.Link>Logout</Dropdown.Link>
          </>
        </Dropdown>
      </div>
    </div>
  );
};

export default Dropdowns;
