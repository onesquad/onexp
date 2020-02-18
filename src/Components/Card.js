import React, { Component } from "react";
import classnames from "classnames";
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
    ]).isRequired,
    extraClass: propTypes.string
  };

  render() {
    const { title, children, extraClass } = this.props;
    return (
      <div className={classnames("xp-card--wrapper", extraClass)}>
        {title && (
          <>
            <Text size="h2" weight="semibold">
              {title}
            </Text>
            <div className="xp--divider mtb--sm"></div>
          </>
        )}
        {children}
      </div>
    );
  }
}
