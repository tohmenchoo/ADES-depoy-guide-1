import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Label,
  ResponsiveContainer,
} from "recharts";
import randomColor from "randomcolor";

export default function BarGraph(props) {
  const { get, loading } = props;

  const COLORS = randomColor({
    count: get.length,
  });

  if (loading === false) {
    return (
      <div>
        <h3 style={{ paddingLeft: "10cm" }}>
          Top 4 respondents with most bids that closed in 2021
        </h3>
        <ResponsiveContainer width="70%" aspect={2}>
          <BarChart data={get}>
            <XAxis
              dataKey="respondent_name"
              type="category"
              interval={0}
              tick={{ fontSize: 12 }}
              height={80}
            >
              <Label value="Respondents" position="insidebottom" />
            </XAxis>
            <YAxis dataKey="bids" type="number" tickCount={10} width={100}>
              <Label value="Number of bids" position="insideleft" angle={-90} />
            </YAxis>
            <CartesianGrid vertical={false} />
            <Tooltip />
            <Bar dataKey="bids" barSize={40}>
              {get.map((entry, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  } else {
    return <p>loading</p>;
  }
}
