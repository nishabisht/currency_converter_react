import React from "react";
import "./Exchange.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeLowVision } from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";

const ExchangeTable = () => {
  const cardData = [
    { amount: 18, method: "Exchanges" },
    { amount: 26, method: "Withdraws" },
  ];

  const currencyTableData = [
    { priority: "High", L30d: "1.15536", L90d: 1.15536, icon: "eye" },
    { priority: "Low", L30d: "1.13124", L90d: 1.12242, icon: "eye" },
    { priority: "Average", L30d: "1.14192", L90d: 1.13839, icon: "eye" },
  ];
  return (
    <React.Fragment>
      <div className="col col-lg-3">
        <div className="row m-2">
          <div className="col text-center">
            {cardData.map((data, index) => (
              <div
                className={`card border-0 border-bottom m-2 ${
                  index % 2 == 0 ? " bg-info bg-opacity-10" : ""
                }`}
                key={index}
              >
                <div className="card-body p-3">
                  <h5 className="card-title theme-text-color fs-2">
                    {data.amount}
                    <span className="ps-2 fs-4">{data.method}</span>
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="col col-lg-8 m-3">
        <table className="table table-borderless text-muted" id="">
          <thead>
            <tr className="text-left text-muted">
              <th scope="col">EUR TO USD</th>
              <th scope="col">LAST 30 DAYS</th>
              <th scope="col ">LAST 90 DAYS</th>
              <th scope="col "></th>
            </tr>
          </thead>
          {currencyTableData.map((tData, index) => (
            <tbody key={index}>
              <tr className="">
                <td>{tData.priority}</td>
                <td>{tData.L30d}</td>
                <td>{tData.L90d}</td>
                <td className="text-muted">
                  <FontAwesomeIcon icon={faEyeLowVision} className="pe-2" />
                  <FontAwesomeIcon icon={faFileAlt} />
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </React.Fragment>
  );
};

export { ExchangeTable };
