import UiAccordion from "../UI/UiAccordion/UiAccordion";
import "./index.scss";

const Accordions = () => {
  return (
    <div className="content">
      <h1>Accordions</h1>
      <p>
        The accordion component allows the user to show and hide sections of related content on a page.
      </p>
      <div className="section">
        <h2>Basic accordion</h2>
        <p>
          Click the accordions below to expand/collapse the accordion content.
        </p>
        <div className="demo">
        <UiAccordion defaultActive="2">
          <UiAccordion.Item eventKey={0}>
            <UiAccordion.Header>Accordion Title 1</UiAccordion.Header>
            <UiAccordion.Body>
              Some text for Accordion 1.
            </UiAccordion.Body>
          </UiAccordion.Item>
          <UiAccordion.Item eventKey={1}>
            <UiAccordion.Header>Accordion Title 2</UiAccordion.Header>
            <UiAccordion.Body>
              Some text for Accordion 2. Some text for Accordion 2.  Some text for Accordion 2. Some text for Accordion 2. Some text for Accordion 2.
            </UiAccordion.Body>
          </UiAccordion.Item>
          <UiAccordion.Item eventKey={2}>
            <UiAccordion.Header>Accordion Title 3</UiAccordion.Header>
            <UiAccordion.Body>
              Some text for Accordion 3.
            </UiAccordion.Body>
          </UiAccordion.Item>
        </UiAccordion>
        </div>
      </div>
    </div>
  );
};

export default Accordions;
