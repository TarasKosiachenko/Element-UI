import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import "./UiDropdown.scss";
import UiButton from "../UiButton/UiButton";

function UiDropdown({ title, children, variant = "primary" }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="ui-dropdown" ref={dropdownRef}>
      <UiButton text={title} color={variant} onClick={toggleOpen} />
      {isOpen && (
        <div className="ui-dropdown-menu">
          {React.Children.map(children, (child) => {
            if (child.type.name === "UiDropdownItem") {
              return React.cloneElement(child, {
                variant,
                onClick: toggleOpen,
              });
            } else {
              return child;
            }
          })}
        </div>
      )}
    </div>
  );
}

function UiDropdownItem({ children, href, active, variant, onClick }) {
  const handleClick = (e) => {
    e.preventDefault();
    onClick();
  };
  return (
    <a
      className={`ui-dropdown-item dropdown-item ${
        active ? "active" : ""
      } text-${variant}`}
      href={href}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}

UiDropdown.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "light",
    "dark",
    "warning",
    "danger",
  ]),
};

UiDropdownItem.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  active: PropTypes.bool,
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "light",
    "dark",
    "warning",
    "danger",
  ]),
  onClick: PropTypes.func,
};

UiDropdown.Item = UiDropdownItem;

export default UiDropdown;