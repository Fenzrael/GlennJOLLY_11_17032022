import { useState, useEffect, useRef } from "react";
import ChevronUp from "./ChevronUp";
import ChevronDown from "./ChevronDown";

const Accordion = (props) => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const [heightEl, setHeightEl] = useState();

  const toggle = () => {
    setToggleIcon(!toggleIcon);
  };

  const refHeight = useRef();

  useEffect(() => {
    setHeightEl(`${refHeight.current.scrollHeight}px`);
  }, []);

  return (
    <div className="accordion">
      <button className="accordion__button" onClick={toggle}>
        <h3 className="accordion__title">{props.title}</h3>
        {toggleIcon ? (
          <ChevronUp className="accordion__chevron" />
        ) : (
          <ChevronDown className="accordion__chevron" />
        )}
      </button>
      <div
        ref={refHeight}
        className={
          toggleIcon ? "accordion__content animated" : "accordion__content"
        }
        style={{ height: toggleIcon ? `${heightEl}` : "0px" }}
      >
        <div
          className={props.className}
          aria-hidden={toggleIcon ? "true" : "false"}
        >
          {props.content}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
