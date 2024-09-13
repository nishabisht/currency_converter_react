import React from "react";
import "./CurrencyExchange.css";
import { Dropdown } from "../SmallComponent/Dropdown.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { faEuro } from "@fortawesome/free-solid-svg-icons";
import { faDollar } from "@fortawesome/free-solid-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

const CurrencyExchange = () => {
  const currencyInput = [
    {
      icon: <FontAwesomeIcon icon={faEuro} />,
      amount: "EUR 1740.00",
      rate: "1 USD=230 Euro",
    },
    {
      icon: <FontAwesomeIcon icon={faDollar} />,
      amount: "EUR 1740.00",
      rate: "1 USD=230 Euro",
    },
  ];
  return (
    <React.Fragment>
      <div className="row my-2">
        <div className="col">
          <div className="d-flex bg-body-tertiary">
            {currencyInput.map((data, index) => (
              <div
                className={`card  ${
                  index === 1 ? "bg-info bg-opacity-10" : ""
                }`}
                id="cxcard"
              >
                <div className="card-body">
                  <div className={index === 2 ? "border-bottom" : ""}>
                    <Dropdown />
                    <span className="text-muted">RESET VALUES</span>
                    <FontAwesomeIcon icon={faEllipsis} className="px-5" />
                  </div>
                  <div className="card-title ">
                    <p className="card-text text-center" key={index}>
                      <h3>
                        <span className="text-muted pe-2">{data.icon}</span>

                        {data.amount}
                      </h3>
                      <span className="text-muted">{data.rate}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <button
              className="btn text-white border border-white border-4 rounded-circle"
              id="xbtn"
            >
              <FontAwesomeIcon icon={faArrowsRotate} size="large" />
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export { CurrencyExchange };
