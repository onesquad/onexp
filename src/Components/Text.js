import React from "react";
import classnames from "classnames";

const Text = ({
  size,
  family,
  weight = "normal",
  color = "default",
  lineHeight = "normal",
  opacity,
  textCenter,
  isUppercase,
  children,
  extraClass,
  ...otherProps
}) => {
  const classList = {
    "xp-text": true,

    // Size
    [`xp-text--${size}`]: true,

    // Weight
    [`xp-text--${weight}`]: true,

    // Color
    [`xp-text--${color}`]: true,

    // Line Height
    [`xp-text__line-height--${lineHeight}`]: true,

    // Alignment
    "xp-text__align--center": textCenter,

    // Case
    "xp-text__transform--uppercase": isUppercase,

    [extraClass]: extraClass
  };

  let Parent = size;
  switch (size) {
    case "jumbo":
    case "h1":
      Parent = "h1";
      break;
    case "micro":
    case "nano":
      Parent = "p";
      break;
  }

  return (
    <Parent
      className={classnames({ ...classList })}
      style={{ opacity }}
      {...otherProps}
    >
      {children}
    </Parent>
  );
};

export default Text;
