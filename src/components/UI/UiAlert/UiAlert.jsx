import React, { useState } from "react";
import PropTypes from "prop-types";
import "./UiAlert.scss";

function UiAlert({ children, onClose, variant, closable }) {
  const [show, setShow] = useState(true);
  const handleClose = () => {
    setShow(false);
    onClose && onClose();
  };
  const alertClasses = `alert ${variant} ${closable ? "closable" : ""} ${show ? "" : "d-none"}`;

  return (
    <div className={alertClasses}>
      {closable && <button className="close" onClick={handleClose} />}
      {React.Children.toArray(children).map((child, index) => {
        if (child.type === UiAlertHeading) {
          return React.cloneElement(child, { key: index });
        }
        return child;
      })}
    </div>
  );
}

UiAlert.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ]),
  closable: PropTypes.bool,
};

UiAlert.defaultProps = {
  onClose: null,
  variant: "primary",
  closable: false,
};

function UiAlertHeading({ children }) {
  return <h4 className="alert-heading">{children}</h4>;
}

UiAlert.Heading = UiAlertHeading;

UiAlertHeading.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UiAlert;