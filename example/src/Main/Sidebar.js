import React from "react";
import { Text } from "onexp";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="xp--sidebar fx-column wp--sm">
      <Text size="h1" color="white" weight="bold" extraClass="mb--lg">
        OneSquad
      </Text>
      <Link to="/buttons" className="mb--sm">
        <Text size="h3" color="white" weight="normal">
          Buttons
        </Text>
      </Link>
      <Link to="/avatars" className="mb--sm">
        <Text size="h3" color="white" weight="normal">
          Avatars
        </Text>
      </Link>
      <Link to="/cards" className="mb--sm">
        <Text size="h3" color="white" weight="normal">
          Cards
        </Text>
      </Link>
      <Link to="/inputs">
        <Text size="h3" color="white" weight="normal">
          Inputs
        </Text>
      </Link>
    </div>
  );
};

export default Sidebar;
