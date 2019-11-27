import React, { useState } from "react";
import { Button, Text, Toastr } from "onexp";

const Buttons = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="xp-animate--fadeIn">
      <Text size="jumbo" weight="bold" color="black" extraClass="mb--lg">
        Buttons
      </Text>
      <div className="fx-row mb--lg">
        <Button type="primary" text="Primary Button" extraClass="mr--lg" />
        <Button
          type="primary"
          text="Button with Icon"
          extraClass="mr--lg"
          icon="calendar"
        />
        <Button
          type="primary"
          text="Primary Button"
          extraClass="mr--lg"
          loading
        />
      </div>
      <div className="fx-row mb--lg">
        <Button type="dark" text="Dark Button" extraClass="mr--lg" />
        <Button
          type="dark"
          onClick={() => {
            setIsLoading(true);
            setTimeout(() => {
              setIsLoading(true);
              Toastr.success("Your article has been published!");
            }, 2000);
          }}
          text="Publish"
          extraClass="mr--lg"
          icon="cloud-upload"
          loading={isLoading}
        />
        <Button type="dark" text="Dark Button" extraClass="mr--lg" loading />
      </div>
      <div className="fx-row mb--lg">
        <Button type="light" text="Light Button" extraClass="mr--lg" />
        <Button
          type="light"
          text="Button with Icon"
          extraClass="mr--lg"
          icon="calendar"
        />
        <Button type="light" text="Light Button" extraClass="mr--lg" loading />
      </div>
      <div className="fx-row mb--lg">
        <Text size="h4" color="black" weight="normal" extraClass="mr--sm">
          Icon Button:
        </Text>
        <Button type="icon" extraClass="mr--lg" icon="calendar" />
      </div>
    </div>
  );
};

export default Buttons;