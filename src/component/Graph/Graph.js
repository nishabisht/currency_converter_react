import React from "react";
import { LineChart } from "./LineChart";
import { ExchangeTable } from "../Exchange/ExchangeTable";
import Chart from "./Chart";

const Graph = () => {
  return (
    <React.Fragment>
      <div className="container graph">
        <div className="row">
          <div className="col">
            {/* <LineChart /> */}
            <Chart />
          </div>
        </div>
        <div className="row my-3">
          <ExchangeTable />
        </div>
      </div>
    </React.Fragment>
  );
};

export { Graph };
