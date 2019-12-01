import React, { Component } from "react";
import classnames from "classnames";
import propTypes from "prop-types";
import { Popover } from "@blueprintjs/core";
import Heading from "./Heading";

export default class Card extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    position: "auto"
  };

  static propTypes = {
    target: propTypes.node.isRequired,
    children: propTypes.oneOfType([
      propTypes.arrayOf(propTypes.node),
      propTypes.node
    ]).isRequired,
    extraClass: propTypes.string
  };

  static Heading = Heading;

  render() {
    const {
      children,
      target,
      position,
      size,
      disabled,
      extraClass
    } = this.props;
    const classList = {
      disabled: disabled
    };

    return (
      <Popover
        popoverClassName={classnames("xp-dropdown", extraClass, classList)}
        targetClassName="mb--xs"
        minimal
        modifiers={{
          offset: "100px"
        }}
        position={position}
        portal={false}
      >
        {target}
        {children}
      </Popover>
    );
  }
}
