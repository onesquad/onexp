import React, { Component } from "react";
import propTypes from "prop-types";
import TextTransition, { presets } from "react-text-transition";
import classnames from "classnames";

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }
  static defaultProps = {
    label: null,
    description: null,
    type: "text",
    placeholder: "",
    error: null,
    className: ""
  };

  static propTypes = {
    label: propTypes.string,
    description: propTypes.string,
    fullWidth: propTypes.bool,
    placeholder: propTypes.string,
    className: propTypes.string,
    id: propTypes.string,
    error: propTypes.string,
    type: propTypes.oneOf(["text", "number", "email", "password"])
  };
  validate = () => {};
  onChange = event => {
    this.validate(event.target.value);
    if (this.props.onChange) this.props.onChange(event);
  };
  render() {
    const {
      value,
      onChange,
      prepend,
      type,
      label,
      description,
      placeholder,
      error,
      className,
      style,
      id
    } = this.props;
    return (
      <div className="xp-form-group" style={style}>
        {(label || error) && (
          <TextTransition
            className={error ? "xp-form-error" : "xp-form-label"}
            text={error || label}
          />
        )}
        {prepend ? (
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon3">
                {prepend}
              </span>
            </div>
            {renderInput({ ...this.props, onChange: this.onChange })}
          </div>
        ) : (
          renderInput({ ...this.props, onChange: this.onChange })
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

const renderInput = ({
  type,
  value,
  onChange,
  fullWidth,
  className,
  id,
  placeholder
}) => (
  <input
    type={type}
    value={value}
    onChange={onChange}
    className={classnames(`form-control xp-input ${className}`, {
      "xp-input--full-width": fullWidth
    })}
    id={id}
    placeholder={placeholder}
  />
);
