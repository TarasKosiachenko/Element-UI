import React from "react";
import PropTypes from "prop-types";
import "./UiButton.scss";

function UiButton({ text, onClick, disabled, size, variant, color }) {
  const isDisabled = disabled ? 'disabled' : ''
  const buttonClasses = `button ${variant} ${color} ${size} ${isDisabled}`;

  return (
    <button className={buttonClasses} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
}

UiButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  variant: PropTypes.oneOf(["text", "contained", "outlined"]),
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
    "light",
    "dark",
  ]),
};

UiButton.defaultProps = {
  onClick: () => {},
  disabled: false,
  size: "medium",
  variant: "contained",
  color: "primary",
};

export default UiButton;
