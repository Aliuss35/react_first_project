import { Chart } from "react-google-charts";
import React, { useEffect, useState } from "react";

const EntriesChartTracker = (props) => {
  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    let tempChartData = props.parentEntries.map((entry) => {
      return [entry.date, entry.weight];
    });
    setChartData(tempChartData);
  }, [props.parentEntries]);
  return (
    <Chart
      chartType="LineChart"
      data={[["Date", "Weight"], ...chartData]}
      width="100%"
      height="400px"
      legendToggle
    />
  );
};

export default EntriesChartTracker;
