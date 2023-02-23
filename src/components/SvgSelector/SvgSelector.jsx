import UiSvgSelector from "../UI/UiSvgSelector/UiSvgSelector";
import "./index.scss";

const SvgSelector = () => {
  const variants = [ "house", "youtube", "search", "github", "linkedin", "twitter", "facebook", "user" ]
  const colors = [ "dark", "primary", "secondary", "success", "danger", "warning", "light" ];
  const sizes = ["small", "medium", "large"];

  const socialLinks = [
    { variant: 'twitter', color: 'primary', link: 'https://twitter.com/' },
    { variant: 'facebook', color: 'secondary', link: 'https://www.facebook.com/' },
    { variant: 'youtube', color: 'danger', link: 'https://www.youtube.com/' },
  ];

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
          {variants.map((variant) => (
            <UiSvgSelector key={variant} variant={variant} />
          ))}
        </div>
      </div>

      <div className="section">
        <h2>Color</h2>
        <p>Choose a color for the icon.</p>
        <p>
          (dark:default, primary, secondary, success, warning, danger, light)
        </p>
        <div className="demo">
          {colors.map((color) => (
            <UiSvgSelector key={color} variant="house" color={color} />
          ))}
        </div>
      </div>

      <div className="section">
        <h2>Size</h2>
        <p>Choose a size for the icon (small, medium, large).</p>
        <div className="demo">
          {sizes.map((size) => (
            <UiSvgSelector key={size} variant="github" size={size} />
          ))}
        </div>
      </div>

      <div className="section">
        <h2>Link</h2>
        <p>Set the link to be opened when the Svg Selector is clicked.</p>
        <div className="demo">
          {socialLinks.map((link) => (
            <UiSvgSelector key={link.variant} {...link} />
          ))}
        </div>
      </div>

      <div className="section">
        <h2>Disabled selector</h2>
        <p>Make the Svg Selector look inactive by adding the disabled prop.</p>
        <div className="demo">
        {socialLinks.map((link) => (
            <UiSvgSelector key={link.variant} {...link} disabled />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SvgSelector;
