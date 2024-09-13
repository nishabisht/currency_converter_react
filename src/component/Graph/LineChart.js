import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import "./Graph.css";
const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const data = {
  labels: labels,
  datasets: [
    {
      label: "Currency exchange board",
      backgroundColor: "rgb(80 99 255)",
      borderColor: "rgb(80 99 255)",
      data: [0, 5, 10, 5, 15, 10, 20, 15, 34, 5, 2, 23, 34, 43],
    },
  ],
};
const LineChart = () => {
  return (
    <div>
      <Line data={data} />
    </div>
  );
};
export { LineChart };
