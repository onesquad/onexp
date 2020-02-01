import React, { useState } from "react";
import { Alert, Button, Text } from "onexp";

const Radios = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="xp-animate--fadeIn">
      <Text size="jumbo" weight="bold" extraClass="mb--lg">
        Radio
      </Text>
      <div className="fx-row mb--lg">
        <Button
          type="primary"
          text="Show alert"
          onClick={() => setOpen(true)}
        />
        <Alert
          isOpen={open}
          onClose={() => setOpen(false)}
          cancelButtonText="Cancel"
          confirmButtonText="Submit"
          intent="primary"
        >
          <p>
            Are you sure you want to move <b>filename</b> to Trash? You will be
            able to restore it later, but it will become private to you.
          </p>
        </Alert>
      </div>
    </div>
  );
};

export default Radios;
