import React from "react";
import classnames from "classnames";
import propTypes from "prop-types";

class Checkbox extends React.Component {
  defaultProps = {
    name: null,
    isChecked: false,
    isDisabled: false,
    error: null,
    extraClass: null
  };

  propTypes = {
    name: propTypes.string,
    isChecked: propTypes.boolean,
    isDisabled: propTypes.boolean,
    error: propTypes.string,
    extraClass: propTypes.string
  };
  render() {
    const {
      name,
      size,
      isChecked,
      isDisabled,
      extraClass,
      ...rest
    } = this.props;

    return (
      <div className={classnames({ "fx-row": true, [extraClass]: extraClass })}>
        <div
          className={classnames({
            "checkmeout-checkbox": true,
            "checkmeout-checkbox-lg": size === "large",
            "checkmeout-checkbox-sm": size === "small"
          })}
          onClick={e => e.stopPropagation()}
        >
          <input
            type="checkbox"
            name={name}
            id={name}
            checked={isChecked}
            disabled={isDisabled}
            {...rest}
          />
          <label className="checkmeout-checkbox-style" htmlFor={name}></label>
        </div>
      </div>
    );
  }
}

export default Checkbox;
