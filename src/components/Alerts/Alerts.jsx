import UiAlert from "../UI/UiAlert/UiAlert";
import UiButton from "../UI/UiButton/UiButton"
import { useState } from 'react';
import "./index.scss";

const Alerts = () => {
  const [show, setShow] = useState(true);
  const variants = ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark",];
  let ucFirst = (str) => (!str ? str : str[0].toUpperCase() + str.slice(1));

  return (
    <div className="content">
      <h1>Alerts</h1>
      <p>
        Alerts provide contextual feedback messages for typical user actions.
      </p>
      <div className="section">
        <h2>Variants</h2>
        <p>
          Alerts come in different variants to indicate the nature of the
          message.
        </p>
        <div className="demo demo-alert">
          {variants.map((variant) => (
            <UiAlert key={variant} variant={variant}>
              { ucFirst(variant) }
            </UiAlert>
          ))}
        </div>
      </div>

      <div className="section">
        <h2>Additional content</h2>
        <p>
          Alerts can contain whatever content you like. Headers, paragraphs, dividers.
        </p>
        <div className="demo demo-alert">
          <UiAlert variant="success">
            <UiAlert.Heading>Title</UiAlert.Heading>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime officiis dolorem commodi veritatis neque nemo sequi laudantium dicta quae deserunt, voluptatibus ea. Commodi alias amet culpa distinctio neque, nihil iusto at tempora deserunt molestiae omnis nesciunt est aspernatur facilis harum.</p>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </UiAlert>
        </div>
      </div>

      <div className="section">
        <h2>Closable</h2>
        <p>
          Add the closable prop to add a functioning dismiss button to the Alert.
        </p>
        <div className="demo demo-alert">
          {
            show ?
            <UiAlert variant="danger" onClose={() => setShow(false)} closable>
              <UiAlert.Heading>You got an error!</UiAlert.Heading>
              <p>Change this and that and try again.</p>
            </UiAlert>
          :
            <UiButton text="Show alert" color="primary" onClick={() => setShow(true)} />
          }
        </div>
      </div>
    </div>
  );
};

export default Alerts;