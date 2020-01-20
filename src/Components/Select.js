import React, { Component } from "react";
import propTypes from "prop-types";
import TextTransition from "react-text-transition";
import classnames from "classnames";
import Select, { components } from "react-select";

const DropdownIndicator = props => {
  return (
    <components.DropdownIndicator {...props}>
      <i class="ri-arrow-down-s-fill ri-lg"></i>
    </components.DropdownIndicator>
  );
};

export default class OneSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }
  static defaultProps = {
    options: propTypes.object,
    value: propTypes.any
  };

  static propTypes = {
    options: propTypes.object,
    value: propTypes.any,
    label: propTypes.string,
    description: propTypes.string,
    fullWidth: propTypes.bool,
    placeholder: propTypes.string,
    extraClass: propTypes.string,
    id: propTypes.string,
    error: propTypes.string,
    onChange: propTypes.func
  };
  validate = () => {};
  onChange = event => {
    this.validate(event.target.value);
    if (this.props.onChange) this.props.onChange(event);
  };
  render() {
    const {
      label,
      options,
      value,
      description,
      onChange,
      error,
      wrapperClassName,
      style
    } = this.props;
    return (
      <div className={"xp-select-container xp-form-group"} style={style}>
        {(label || error) && (
          <TextTransition
            className={classnames({
              "xp-form-label": true,
              "xp-form-error": error
            })}
            text={error || label}
          />
        )}
        <Select
          components={{
            DropdownIndicator,
            IndicatorSeparator: () => null
          }}
          options={options}
          value={value}
          onChange={onChange}
          classNamePrefix="xp"
          isSearchable={false}
        />
        {description && (
          <small id="emailHelp" className="xp-form-description">
            {description}
          </small>
        )}
      </div>
    );
  }
}
