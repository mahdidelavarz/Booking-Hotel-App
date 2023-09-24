import { useRef, useState } from "react";
import OptionItem from "./OptionItem";
import useOutSideClick from "../../hooks/useOutSideClick";

const GuestOptions = ({ setOpenOption , option , handleOptions}) => {
  const optionRef = useRef();
  useOutSideClick(
    optionRef,
    "optionDropDown",
    () => setOpenOption(false),
  );
  return (
    <div className="guestOptions cursor-default" ref={optionRef}>
      <OptionItem
        handleOptions={handleOptions}
        type="Adult"
        options={option}
        minLimit={1}
      />
      <OptionItem
        handleOptions={handleOptions}
        type="Children"
        options={option}
        minLimit={0}
      />
      <OptionItem
        handleOptions={handleOptions}
        type="Room"
        options={option}
        minLimit={1}
      />
    </div>
  );
};

export default GuestOptions;
