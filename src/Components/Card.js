import React, { Component } from "react";
import propTypes from "prop-types";
import Text from "./Text";

export default class Card extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    title: "",
    children: null
  };

  static propTypes = {
    title: propTypes.string,
    children: propTypes.oneOfType([
      propTypes.arrayOf(propTypes.node),
      propTypes.node
    ]).isRequired
  };

  render() {
    const { title, children } = this.props;
    return (
      <div className="xp-card--wrapper">
        <Text
          size="h2"
          weight="semibold"
          extraClass="pb--sm wmb--sm border-bottom"
        >
          {title}
        </Text>
        {children}
      </div>
    );
  }
}
