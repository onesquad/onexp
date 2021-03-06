import React from "react";
import classnames from "classnames";
import { Link, NavLink } from "react-router-dom";
import { Icon } from "@blueprintjs/core";
import * as R from "ramda";
const noop = () => {};

const Button = ({
  type = "dark",
  to,
  text,
  icon,
  iconSize,
  iconColor,
  iconPosition,
  disabled,
  hasUnderline,
  loading,
  fullWidth,
  extraClass,
  inheritFontSize,
  activeClassName,
  submit,
  onClick = noop,
  ...otherProps
}) => {
  const nakedButton = type === "link" || type === "text";

  const classList = {
    "xp-button": !nakedButton,
    [`xp-button--${type}`]: true,
    "xp-button--loading": loading,
    "xp-button--underline": hasUnderline,
    "xp-button--full-width": fullWidth,
    disabled: disabled
  };

  const handleClick = e => {
    if (!loading && !disabled) {
      onClick(e);
    }
  };

  const isIconButton = type === "icon";
  const isLightButton = type === "light" || type === "light-outline";
  const iconRight = iconPosition === "right";

  const commonProps = {
    className: classnames(extraClass, { ...classList }),
    style: inheritFontSize && { fontSize: "inherit" },
    onClick: handleClick,
    ...otherProps
  };

  const getInnerContent = () => {
    if (loading && !isIconButton) {
      return (
        <>
          {text}
          <ButtonLoader />
        </>
      );
    } else if (icon) {
      const iconProps = {
        icon,
        iconSize: iconSize || 14,
        color: iconColor
          ? iconColor
          : isLightButton || isIconButton
          ? "black"
          : "white"
      };
      const iconElement = (
        <Icon
          {...iconProps}
          className={classnames({
            "ml--sm": iconRight && !isIconButton,
            "mr--sm": !iconRight && !isIconButton,
            "xp-button--inner-icon": true
          })}
        />
      );
      if (iconRight) {
        return (
          <>
            {text}
            {iconElement}
          </>
        );
      } else {
        return (
          <>
            {iconElement}
            {text}
          </>
        );
      }
    } else {
      return text;
    }
  };

  let buttonProps = {
    ...commonProps
  };

  let Parent = `a`;
  if (submit) {
    Parent = `button`;
  }
  if (!R.isNil(to)) {
    Parent = Link;
    buttonProps.to = to;
  }
  if (!R.isNil(activeClassName)) {
    Parent = NavLink;
    buttonProps.activeClassName = activeClassName;
  }

  return <Parent {...buttonProps}>{getInnerContent()}</Parent>;
};

const ButtonLoader = () => {
  return (
    <div className="fx-row fx-jc--center xp-button--loader xp-button--loader__dots">
      <span />
      <span />
      <span />
    </div>
  );
};

export default Button;
