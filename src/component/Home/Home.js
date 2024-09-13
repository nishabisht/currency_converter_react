import React from "react";
import { VerticalNav } from "../Nav/VerticalNav";
import { CurrencyExchange } from "../Exchange/CurrencyExchange";
import { Graph } from "../Graph/Graph";
import { LineChart } from "../Graph/LineChart";
import { ExchangeHeader } from "../Exchange/ExchangeHeader";
import { Profile } from "..//Profile/Profile";

const Home = () => {
  return (
    <React.Fragment>
      <section
        className="container-fluid text-muted "
        style={{
          margin: "0px",
          padding: "0px",
        }}
      >
        <div className="row ">
          <div className="col col-lg-2  rounded">
            <VerticalNav />
          </div>
          <div className="col col-lg-7   rounded">
            <ExchangeHeader />
            <CurrencyExchange />
            <Graph />
          </div>
          <div className="col col-lg-3 p-1 rounded">
            <Profile />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export { Home };
