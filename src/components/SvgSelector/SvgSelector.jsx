import UiSvgSelector from "../UI/UiSvgSelector/UiSvgSelector";
import "./index.scss";

const SvgSelector = () => {
  return (
    <div className="content">
      <UiSvgSelector id="youtube" />
      <UiSvgSelector id="search" />
      <UiSvgSelector id="github" />
      <UiSvgSelector id="twitter" />
      <UiSvgSelector id="facebook" />
      <UiSvgSelector id="user" />
      <UiSvgSelector id="house" />
    </div>
  );
};

export default SvgSelector;
