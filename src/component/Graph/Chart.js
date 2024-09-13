import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", uv: 1.12 },
  { name: "Feb", uv: 1.14 },
  { name: "Mar", uv: 1.15 },
  { name: "Apr", uv: 1.2 },
  { name: "May", uv: 1.18 },
  { name: "Jun", uv: 1.19 },
  { name: "Jul", uv: 1.22 },
  { name: "Aug", uv: 1.25 },
  { name: "Sep", uv: 1.27 },
  { name: "Oct", uv: 1.3 },
  { name: "Nov", uv: 1.28 },
];

const Chart = () => (
  <ResponsiveContainer width="100%" height={400}>
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis domain={[1.1, 1.3]} />
      <Tooltip />
      <Line
        type="monotone"
        dataKey="uv"
        stroke="#8884d8"
        dot={{ r: 6 }}
        activeDot={{ r: 8 }}
      />
    </LineChart>
  </ResponsiveContainer>
);

export default Chart;
