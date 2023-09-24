import GuestOptions from "./GuestOptions";
import { MdLocationOn } from "react-icons/md";
import { HiCalendar, HiSearch } from "react-icons/hi";
import { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { useRef } from "react";
import useOutSideClick from "../../hooks/useOutSideClick";
const Header = () => {
  const [destination, setDestination] = useState();
  const [openOptions, setOpenOption] = useState();
  const [option, setOption] = useState({
    Adult: 1,
    Children: 0,
    Room: 1,
  });
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openDate, setOpenDate] = useState();
  const handleOptions = (name, operation) => {
    setOption((prev) => {
      return {
        ...prev,
        [name]: operation === "inc" ? option[name] + 1 : option[name] - 1,
      };
    });
  };
  const dateRef = useRef();
  useOutSideClick(dateRef, "dateDropDown", () => setOpenDate(false));
  return (
    <div className="header">
      <div className="headerSearch">
        <div className="headerSearchItem">
          <MdLocationOn className="headerIcon locationIcon" />
          <input
            type="text"
            placeholder="Where To Go ?"
            className="headerSearchInput"
            name="destination"
            id="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
          <span className="separator"></span>
        </div>
        <div id="dateDropDown" className="headerSearchItem" ref={dateRef}>
          <HiCalendar className="headerIcon dateIcon" />
          <div className="dateDropDown" onClick={() => setOpenDate(!openDate)}>
            {`${format(date[0].startDate, "MM/dd/yyy")} to ${format(
              date[0].endDate,
              "MM/dd/yyy"
            )}`}
          </div>
          {openDate && (
            <DateRange
              ranges={date}
              className="date"
              onChange={(item) => setDate([item.selection])}
              minDate={new Date()}
              moveRangeOnFirstSelection={true}
            />
          )}
          <span className="separator"></span>
        </div>

        <div className="headerSearchItem cursor-pointer">
          <div id="optionDropDown" onClick={() => setOpenOption(!openOptions)}>
            {option.Adult} adult . {option.Children} children . {option.Room}{" "}
            room
          </div>
          {openOptions && (
            <GuestOptions
              setOpenOption={setOpenOption}
              openOptions={openOptions}
              option={option}
              handleOptions={handleOptions}
            />
          )}
          <span className="separator"></span>
        </div>

        <div className="headerSearchItem">
          <button className="headerSearchBtn">
            <HiSearch className="headerIcon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
