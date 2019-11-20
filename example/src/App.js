import React, { Component } from "react";

import { Button, Text } from "onexp";

export default class App extends Component {
  render() {
    return (
      <div className="fx-row fx-ai--start xp--wrapper">
        <div className="xp--sidebar fx-column fx-ai--center wp--sm">
          <Text size="h1" color="white">
            OneSquad
          </Text>
        </div>
        <div className="fx-grow-1 wptb--sm wplr--lg">
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
              text="Publish"
              extraClass="mr--lg"
              icon="cloud-upload"
            />
            <Button
              type="dark"
              text="Dark Button"
              extraClass="mr--lg"
              loading
            />
          </div>
          <div className="fx-row mb--lg">
            <Button type="light" text="Light Button" extraClass="mr--lg" />
            <Button
              type="light"
              text="Button with Icon"
              extraClass="mr--lg"
              icon="calendar"
            />
            <Button
              type="light"
              text="Light Button"
              extraClass="mr--lg"
              loading
            />
          </div>
          <div className="fx-row mb--lg">
            <Text size="h4" color="black" weight="normal" extraClass="mr--sm">
              Icon Button:
            </Text>
            <Button type="icon" extraClass="mr--lg" icon="calendar" />
          </div>
        </div>
      </div>
    );
  }
}
