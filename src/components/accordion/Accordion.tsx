import { useState } from "react";
import type { accordion } from "../../utils/types/types";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "./Accordion.css";
interface accordionProps {
  accordionData: accordion[];
}

const Accordion = (props: accordionProps) => {
  const accordionData = props.accordionData;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div
      className="accordion-wrapper"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        maxWidth: "500px",
        minWidth: "500px",
      }}
    >
      {accordionData ? (
        <>
          {accordionData.map((item, index) => (
            <div className="accordion" key={index}>
              <div className="accordion-header">
                <div className="accordion-title">{item.title}</div>
                <div className="accordion-action">
                  {index === activeIndex ? (
                    <IoIosArrowUp onClick={() => setActiveIndex(null)} />
                  ) : (
                    <IoIosArrowDown onClick={() => setActiveIndex(index)} />
                  )}
                </div>
              </div>
              <div
                className="accordion-body"
                style={{
                  display: index === activeIndex ? "block" : "none",
                  padding: "16px",
                }}
              >
                {item.content}
              </div>
            </div>
          ))}
        </>
      ) : (
        <div>No Items to display</div>
      )}
    </div>
  );
};
export default Accordion;
