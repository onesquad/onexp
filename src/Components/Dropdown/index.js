import React, { Component } from "react";
import classnames from "classnames";
import propTypes from "prop-types";
import { Popover, Divider } from "@blueprintjs/core";
import Heading from "./Heading";
import Link from "./Link";

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
  static Divider = Divider;
  static Link = Link;

  render() {
    const {
      children,
      target,
      position,
      size = "md",
      disabled,
      extraClass
    } = this.props;
    const classList = {
      disabled: disabled,
      [`xp-dropdown-${size}`]: true
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
        portalClassName="xp-dropdown-portal"
      >
        {target}
        {children}
      </Popover>
    );
  }
}
