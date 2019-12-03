import React from "react";
import { Text } from "onexp";
export default props => (
  <div>
    <Text size="h3" extraClass="pl--lg mb--sm">
      {props.children}
    </Text>
  </div>
);
