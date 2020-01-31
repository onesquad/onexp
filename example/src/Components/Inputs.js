import React, { useState } from "react";
import { Box, Button, Input, Text } from "onexp";

const Inputs = () => {
  const [error, setError] = useState(false);
  return (
    <div className="xp-animate--fadeIn wml--xl">
      <Box>
        <Text size="h1" weight="normal" color="black" extraClass="mb--sm">
          Create your OneSquad account
        </Text>
        <Text size="h4" extraClass="mb--lg">
          Already have an account?{" "}
          <span className="xp-text--accent xp-text--regular">Sign in</span>
        </Text>
      </Box>
      <div className="fx-col mb--lg">
        <Input error={error} label="Email" placeholder="john@acme.inc" />
        <Input label="Fullname" />
        <Input label="Password" />
        <Input label="Repeat password" />
      </div>
      <div className="mt--sm ml--xl">
        <Button
          type="primary"
          text="Submit"
          onClick={() => setError("Please enter a valid email")}
        />
      </div>
    </div>
  );
};

export default Inputs;
