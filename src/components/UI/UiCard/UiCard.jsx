import React from "react";
import PropTypes from "prop-types";
import "./UiCard.scss"

function UiCard({ style, children }) {
  return (
    <div className="card" style={style}>
      {children}
    </div>
  );
}

const UiCardHeader = ({ children }) => {
  return <div className="card-header">{children}</div>;
};

const UiCardImg = ({ variant="top", src }) => {
  return <img className={`card-img card-img-${variant}`} src={src} alt="" />;
};

const UiCardBody = ({ children }) => {
  return <div className="card-body">{children}</div>;
};

const UiCardTitle = ({ children }) => {
  return <h5 className="card-title">{children}</h5>;
};

const UiCardText = ({ children }) => {
  return <p className="card-text">{children}</p>;
};

UiCard.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
};
UiCardHeader.propTypes = {
  children: PropTypes.node.isRequired,
};
UiCardImg.propTypes = {
  variant: PropTypes.oneOf(["top", "middle", "bottom"]).isRequired,
  src: PropTypes.string.isRequired,
};
UiCardBody.propTypes = {
  children: PropTypes.node.isRequired,
};
UiCardTitle.propTypes = {
  children: PropTypes.node.isRequired,
};
UiCardText.propTypes = {
  children: PropTypes.node.isRequired,
};

UiCard.Header = UiCardHeader;
UiCard.Img = UiCardImg;
UiCard.Body = UiCardBody;
UiCard.Title = UiCardTitle;
UiCard.Text = UiCardText;

export default UiCard;
