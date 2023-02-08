import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { FAQ } from "../../constants";

import "./accordion.scss";

const Accordion = () => {
  const [active, setActive] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    if (active === index) {
      return setActive(null);
    }

    setActive(index);
  };

  const isActive = (active: number | null, index: number) => active === index;

  return (
    <div className="accordion">
      {FAQ.map((item, index) => (
        <div className="accordion__item" key={index}>
          <div
            className="accordion__question"
            onClick={() => toggleItem(index)}
          >
            <h3 className="accordion__title title-tertiary">{item.question}</h3>
            <span className="accordion__arrow">
              {isActive(active, index) ? <FaAngleUp /> : <FaAngleDown />}
            </span>
          </div>
          <div
            className={
              isActive(active, index)
                ? "accordion__answer accordion__answer--active"
                : "accordion__answer"
            }
          >
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
};
export default Accordion;
