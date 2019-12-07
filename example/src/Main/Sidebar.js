import React from "react";
import { Text } from "onexp";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="xp--sidebar fx-column wp--sm">
      <Text size="h1" color="white" weight="bold" extraClass="mb--lg">
        OneSquad
      </Text>
      <Link to="/avatars" className="mb--sm">
        <Text size="h3" color="white" weight="normal">
          Avatars
        </Text>
      </Link>
      <Link to="/buttons" className="mb--sm">
        <Text size="h3" color="white" weight="normal">
          Buttons
        </Text>
      </Link>
      <Link to="/cards" className="mb--sm">
        <Text size="h3" color="white" weight="normal">
          Cards
        </Text>
      </Link>
      <Link to="/dropdowns" className="mb--sm">
        <Text size="h3" color="white" weight="normal">
          Dropdowns
        </Text>
      </Link>
      <Link to="/inputs" className="mb--sm">
        <Text size="h3" color="white" weight="normal">
          Inputs
        </Text>
      </Link>
      <Link to="/modals">
        <Text size="h3" color="white" weight="normal">
          Modals
        </Text>
      </Link>
    </div>
  );
};

export default Sidebar;
