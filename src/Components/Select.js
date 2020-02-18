import React, { Component } from "react";
import propTypes from "prop-types";
import TextTransition from "react-text-transition";
import classnames from "classnames";
import Select, { components } from "react-select";

const DropdownIndicator = props => {
  return (
    <svg className="xp__dropdown">
      <path d="M11.891 9.992a1 1 0 1 1 1.416 1.415l-4.3 4.3a1 1 0 0 1-1.414 0l-4.3-4.3A1 1 0 0 1 4.71 9.992l3.59 3.591 3.591-3.591zm0-3.984L8.3 2.417 4.709 6.008a1 1 0 0 1-1.416-1.415l4.3-4.3a1 1 0 0 1 1.414 0l4.3 4.3a1 1 0 1 1-1.416 1.415z"></path>
    </svg>
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
      <div className="xp-select-container" style={style}>
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
        {error && (
          <div className="fx-row mt--sm">
            <i class="ri-error-warning-fill xp-form-error-icon mr--xs"></i>
            <span className="xp-form-error">{error}</span>
          </div>
        )}
        {description && (
          <small id="emailHelp" className="xp-form-description">
            {description}
          </small>
        )}
      </div>
    );
  }
}
