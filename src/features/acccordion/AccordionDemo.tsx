import Accordion from "../../components/accordion/Accordion";
import { AccordionMockData } from "../../mocks/AccordionMock/accordion.mock";

const AccordionDemo = () => {
  return (
    <div className="accordion-wrapper">
      <h1>Accordion</h1>
      <Accordion accordionData={AccordionMockData} />
    </div>
  );
};
export default AccordionDemo;
