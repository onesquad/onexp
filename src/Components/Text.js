import React from 'react'
import classnames from 'classnames'

const Text = ({
  size, family, weight, color, lineHeight, opacity,
  textCenter, isUppercase, children, extraClass,
  ...otherProps
}) => {
  // Size
  const isJumbo = size === 'jumbo'
  const isH1 = size === 'h1'
  const isH2 = size === 'h2'
  const isH3 = size === 'h3'
  const isH4 = size === 'h4'
  const isMicro = size === 'micro'
  const isNano = size === 'nano'

  const classList = {
    'xp-text': true,

    // Size
    'xp-text--jumbo': isJumbo,
    'xp-text--h1': isH1,
    'xp-text--h2': isH2,
    'xp-text--h3': isH3,
    'xp-text--h4': isH4,
    'xp-text--micro': isMicro,
    'xp-text--nano': isNano,

    // Weight
    'xp-text--bold': weight === 'bold',
    'xp-text--semibold': weight === 'semibold',
    'xp-text--regular': weight === 'regular',
    'xp-text--normal': weight === 'normal',
    'xp-text--thin': weight === 'thin',

    // Color
    'xp-text--black': color === 'black',
    'xp-text--white': color === 'white',

    // Line Height
    'xp-text__line-height--normal': lineHeight === 'normal',
    'xp-text__line-height--small': lineHeight === 'small',
    'xp-text__line-height--medium': lineHeight === 'medium',
    'xp-text__line-height--large': lineHeight === 'large',

    // Alignment

    'xp-text__align--center': textCenter,

    // Case

    'xp-text__transform--uppercase': isUppercase,

    [extraClass]: extraClass
  }

  return (
    <>
      {isJumbo &&
        <h1
          className={classnames({ ...classList })}
          style={{ opacity }}
          {...otherProps}
        >
          {children}
        </h1>}
      {isH1 &&
        <h1
          className={classnames({ ...classList })}
          style={{ opacity }}
          {...otherProps}
        >
          {children}
        </h1>}
      {isH2 &&
        <h2
          className={classnames({ ...classList })}
          style={{ opacity }}
          {...otherProps}
        >
          {children}
        </h2>}
      {isH3 &&
        <h3
          className={classnames({ ...classList })}
          style={{ opacity }}
          {...otherProps}
        >
          {children}
        </h3>}
      {isH4 &&
        <h4
          className={classnames({ ...classList })}
          style={{ opacity }}
          {...otherProps}
        >
          {children}
        </h4>}
      {(isMicro || isNano) &&
        <p
          className={classnames({ ...classList })}
          style={{ opacity }}
          {...otherProps}
        >
          {children}
        </p>}
    </>
  )
}

export default Text
