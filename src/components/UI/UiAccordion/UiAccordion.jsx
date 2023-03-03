import React, { useState } from "react";
import "./UiAccordion.scss";

function UiAccordion(props) {
  const [activeIndex, setActiveIndex] = useState(
    parseInt(props.defaultActive) || 0
  );

  const handleAccordionClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <div className="ui-accordion">
      {React.Children.map(props.children, (child, index) => {
        if (child.type.displayName === "AccordionItem") {
          return React.cloneElement(child, {
            isActive: child.props.eventKey === activeIndex,
            eventKey: child.props.eventKey,
            handleAccordionClick,
          });
        } else {
          console.warn(
            `UiAccordion only accepts children of type AccordionItem`
          );
          return null;
        }
      })}
    </div>
  );
}

function AccordionItem(props) {
  const { isActive, eventKey, handleAccordionClick } = props;

  const handleClick = () => {
    handleAccordionClick(eventKey);
  };

  return (
    <div className={`accordion-item ${isActive ? "active" : ""}`}>
      <div className="accordion-header" onClick={handleClick}>
        {props.children[0]}
      </div>
      {<div className="accordion-body" style={{ heingt: props.children.height }}>{props.children[1]}</div>}
    </div>
  );
}

AccordionItem.displayName = "AccordionItem";

function AccordionHeader(props) {
  return <>{props.children}</>;
}

function AccordionBody(props) {
  return <>{props.children}</>;
}

UiAccordion.Item = AccordionItem;
UiAccordion.Header = AccordionHeader;
UiAccordion.Body = AccordionBody;

export default UiAccordion;