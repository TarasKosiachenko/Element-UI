import UiSvgSelector from "../UI/UiSvgSelector/UiSvgSelector";
import "./index.scss";

const SvgSelector = () => {
  return (
    <div className="content">
      <h1>Svg Selector</h1>
      <p>Select an SVG icon from the list below:</p>
      <div className="section">
        <h2>Basic selector</h2>
        <p>
          The Svg Selector allows users to select an SVG icon from a list of
          options.
        </p>
        <p>
          (house, youtube, search, github, linkedin, twitter, facebook, user)
        </p>
        <p>
          If the parameter is missing, the 'svg' text is output by default
        </p>
        <div className="demo">
          <UiSvgSelector />
          <UiSvgSelector id="house" />
          <UiSvgSelector id="youtube" />
          <UiSvgSelector id="search" />
          <UiSvgSelector id="github" />
          <UiSvgSelector id="linkedin" />
          <UiSvgSelector id="twitter" />
          <UiSvgSelector id="facebook" />
          <UiSvgSelector id="user" />
        </div>
      </div>

      <div className="section">
        <h2>Color</h2>
        <p>Choose a color for the icon.</p>
        <p>
          (dark:default, primary, secondary, success, warning, danger, light)
        </p>
        <div className="demo">
          <UiSvgSelector id="house" color="dark" />
          <UiSvgSelector id="house" color="primary" />
          <UiSvgSelector id="house" color="secondary" />
          <UiSvgSelector id="house" color="success" />
          <UiSvgSelector id="house" color="warning" />
          <UiSvgSelector id="house" color="danger" />
          <UiSvgSelector id="house" color="light" />
        </div>
      </div>

      <div className="section">
        <h2>Size</h2>
        <p>Choose a size for the icon (small, medium, large).</p>
        <div className="demo">
          <UiSvgSelector id="github" size="small" />
          <UiSvgSelector id="github" size="medium" />
          <UiSvgSelector id="github" size="large" />
        </div>
      </div>

      <div className="section">
        <h2>Link</h2>
        <p>Set the link to be opened when the Svg Selector is clicked.</p>
        <div className="demo">
          <UiSvgSelector id="twitter" color="primary" link="https://twitter.com/" />
          <UiSvgSelector id="facebook" color="secondary" link="https://www.facebook.com/" />
          <UiSvgSelector id="youtube" color="danger" link="https://www.youtube.com/" />
        </div>
      </div>

      <div className="section">
        <h2>Disabled selector</h2>
        <p>Make the Svg Selector look inactive by adding the disabled prop.</p>
        <div className="demo">
          <UiSvgSelector id="twitter" link="https://www.google.com/" disabled />
          <UiSvgSelector id="twitter" link="https://www.google.com/" disabled />
          <UiSvgSelector id="twitter" color="primary" link="https://www.google.com/" disabled />
        </div>
      </div>
    </div>
  );
};

export default SvgSelector;
