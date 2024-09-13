import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faClockFour } from "@fortawesome/free-solid-svg-icons";

const ExchangeHeader = () => {
  return (
    <React.Fragment>
      <div className="row m-2">
        <div className="col border-bottom">
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <div className="col border-bottom">
          <div className="h2 text-center ">Exchange</div>
        </div>
        <div className="col border-bottom text-center">
          <FontAwesomeIcon icon={faClockFour} className="px-2" />
          <FontAwesomeIcon icon={faCalendar} />
        </div>
      </div>
    </React.Fragment>
  );
};

export { ExchangeHeader };
