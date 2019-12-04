import React, { Component } from "react";
import classnames from "classnames";
import propTypes from "prop-types";
import Text from "./Text";

export default class Card extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    image: "",
    size: "sm",
    disabled: false,
    interactive: false
  };

  static propTypes = {
    image: propTypes.string,
    extraClass: propTypes.string,
    interactive: propTypes.bool
  };

  render() {
    const { interactive, image, size, disabled, extraClass } = this.props;
    const classList = {
      [`xp-avatar--${size}`]: true,
      "xp-avatar--interactive": interactive,
      disabled: disabled
    };
    return (
      <img
        className={classnames("xp-avatar", extraClass, classList)}
        src={image}
      />
    );
  }
}
