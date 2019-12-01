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
    disabled: false
  };

  static propTypes = {
    iamge: propTypes.string,
    extraClass: propTypes.string
  };

  render() {
    const { image, size, disabled, extraClass } = this.props;
    const classList = {
      [`xp-avatar--${size}`]: true,
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
