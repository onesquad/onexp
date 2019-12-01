import React, { useState } from "react";
import { Avatar, Text, Toastr } from "onexp";

const Avatars = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="xp-animate--fadeIn">
      <Text size="jumbo" weight="bold" extraClass="mb--lg">
        Avatars
      </Text>
      <div className="fx-row mb--lg">
        <Avatar
          extraClass="mr--md"
          size="sm"
          image="https://avatars1.githubusercontent.com/u/199754?s=460&v=4"
        />
        <Avatar
          extraClass="mr--md"
          size="md"
          image="https://avatars1.githubusercontent.com/u/199754?s=460&v=4"
        />
        <Avatar
          extraClass="mr--md"
          size="lg"
          image="https://avatars1.githubusercontent.com/u/199754?s=460&v=4"
        />
        <Avatar
          extraClass="mr--md"
          size="xl"
          image="https://avatars1.githubusercontent.com/u/199754?s=460&v=4"
        />
      </div>
    </div>
  );
};

export default Avatars;
