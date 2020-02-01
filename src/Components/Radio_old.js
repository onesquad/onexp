import React from "react";
import classnames from "classnames";
import Text from "./Text";

class Radio extends React.Component {
  render() {
    const { stacked, label, children } = this.props;
    const singleChild = React.Children.count(children) === 1;
    const margin = singleChild ? "" : stacked ? "mb--lg" : "mr--xl";
    return (
      <>
        {label && (
          <Text size="micro" weight="normal">
            {label}
          </Text>
        )}
        <div
          className={classnames({
            "fx-row fx-jc--between fx-ai--start": !stacked,
            "fx-column": stacked
          })}
        >
          {React.Children.map(children, child => {
            return React.cloneElement(child, {
              extraClass: `${child.props.extraClass || ""} ${margin}`
            });
          })}
        </div>
      </>
    );
  }
}

const Item = ({
  name,
  label,
  isDisabled,
  size,
  id,
  isChecked,
  extraClass,
  infoText,
  infoTextRow,
  ...rest
}) => {
  if (!name) {
    console.error("SSComponents->Radio {name} prop is requried.");
    return null;
  }

  return (
    <div
      className={classnames({
        "fx-row": true,
        "fx-ai--start": infoText,
        [extraClass]: extraClass
      })}
    >
      <label
        className={classnames({
          "checkmeout-radio": true,
          "checkmeout-radio-lg": size === "large",
          "checkmeout-radio-sm": size === "small",
          "mr--sm": label
        })}
      >
        <input
          type="radio"
          name={name}
          id={label}
          checked={isChecked}
          disabled={isDisabled}
          {...rest}
        />
        <span className="checkmeout-radio-style"></span>
      </label>
      {label && (
        <div
          className={classnames({
            "fx-column fx-jc--start fx-ai--start": !infoTextRow,
            "fx-row fx-jc--start fx-ai--start": infoTextRow
          })}
        >
          <Text size="micro" weight="normal">
            {label}
          </Text>
        </div>
      )}
    </div>
  );
};

Radio.Item = Item;

export default Radio;
