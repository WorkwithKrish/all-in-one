import { useState } from "react";
import type { accordion } from "../../utils/types/types";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "./Accordion.scss";
interface accordionProps {
  accordionData: accordion[];
}

const Accordion = (props: accordionProps) => {
  const accordionData = props.accordionData;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div
      className="accordion-wrapper1"
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
              <button
                className="accordion-header"
                onClick={() =>
                  setActiveIndex((prev) => (prev === index ? null : index))
                }
              >
                <div className="accordion-title">{item.title}</div>
                <div className="accordion-action">
                  {index === activeIndex ? (
                    <IoIosArrowUp />
                  ) : (
                    <IoIosArrowDown />
                  )}
                </div>
              </button>
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
