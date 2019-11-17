import React from 'react'
import classnames from 'classnames'
import { Link } from 'react-router-dom'
import { Icon } from "@blueprintjs/core"

const noop = () => {}

const Button = ({
  type, to, text, icon, iconPos, iconSize, iconColor, isDisabled, hasUnderline,
  isLoading, isFullWidth, loaderType, loadingText, extraClass, inheritFontSize,
  onClick = noop,
  ...otherProps
}) => {
  const isPrimaryBtn = type === 'primary'
  const isDarkBtn = type === 'dark'
  const isLightBtn = type === 'light'
  const isDangerBtn = type === 'danger'
  const isIconBtn = type === 'icon'
  const isLink = to !== undefined

  const posRight = iconPos === 'right'

  const classList = {
    'xp-button': true,
    'xp-button--primary': isPrimaryBtn,
    'xp-button--dark': isDarkBtn,
    'xp-button--light': isLightBtn,
    'xp-button--danger': isDangerBtn,
    'xp-button--icon-only': isIconBtn,
    'xp-button--loading': isLoading,
    'xp-button--underline': hasUnderline,
    'xp-button--full-width': isFullWidth,
    'disabled': isDisabled,
    [extraClass]: extraClass
  }

  // Handling SVG

  const iconProps = {
    icon,
    iconSize: iconSize || 14,
    color: iconColor || (isLightBtn || isIconBtn ) ? 'black' : 'white',
  };

  let innerContent

  if (icon) {
    if (posRight) {
      innerContent = <React.Fragment>{text}<Icon {...iconProps} className={classnames({ 'ml--sm': !isIconBtn })}/></React.Fragment>;
    } else {
      innerContent = <React.Fragment><Icon {...iconProps} className={classnames({ 'mr--sm': !isIconBtn })}/>{text}</React.Fragment>;
    }
  } else {
    innerContent = <React.Fragment>{text}</React.Fragment>
  }

  //Handling Loader
  if (isLoading && !isIconBtn) {
    innerContent = <React.Fragment>{innerContent}<ButtonLoader/></React.Fragment>;
  }

  const handleClick = (e) => {
    if (!isLoading && !isDisabled) {
      onClick(e)
    }
  }

  return (
    isLink
      ? <Link className={classnames({ ...classList })} style={{ fontSize: inheritFontSize ? 'inherit' : '' }} onClick={handleClick} {...otherProps}>
        {innerContent}
      </Link>
      : <a className={classnames({ ...classList })} style={{ fontSize: inheritFontSize ? 'inherit' : '' }} onClick={handleClick} {...otherProps}>
        {innerContent}
        </a>
  )
}

const ButtonLoader = () => {
  return (
    <div className='fx-row fx-jc--center xp-button--loader xp-button--loader__dots'>
      <span />
      <span />
      <span />
    </div>
  )
}

export default Button
