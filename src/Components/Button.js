import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { Icon } from '@blueprintjs/core';
import * as R from 'ramda';
const noop = () => {};

const Button = ({
  type,
  to,
  text,
  icon,
  iconSize,
  iconColor,
  disabled,
  hasUnderline,
  loading,
  fullWidth,
  extraClass,
  inheritFontSize,
  onClick = noop,
  ...otherProps
}) => {
  const classList = {
    'xp-button': true,
    [`xp-button--${type}`]: true,
    'xp-button--loading': loading,
    'xp-button--underline': hasUnderline,
    'xp-button--full-width': fullWidth,
    disabled: disabled,
  };

  const handleClick = e => {
    if (!loading && !disabled) {
      onClick(e);
    }
  };

  const isIconButton = type === 'icon';
  const isLightButton = type === 'light';

  const commonProps = {
    className: classnames(extraClass, { ...classList }),
    style: inheritFontSize && { fontSize: 'inherit' },
    onClick: handleClick,
    ...otherProps,
  };

  const getInnerContent = () => {
    if (loading && !isIconButton) {
      return (
        <React.Fragment>
          {text}
          <ButtonLoader />
        </React.Fragment>
      );
    } else if (icon) {
      const iconProps = {
        icon,
        iconSize: iconSize || 14,
        color: iconColor || isLightButton || isIconButton ? 'black' : 'white',
      };
      return (
        <React.Fragment>
          <Icon
            {...iconProps}
            className={classnames({ 'mr--sm': !isIconButton })}
          />
          {text}
        </React.Fragment>
      );
    } else {
      return text;
    }
  };

  const Parent = R.isNil(to) ? `a` : Link;

  return <Parent {...commonProps}>{getInnerContent()}</Parent>;
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
