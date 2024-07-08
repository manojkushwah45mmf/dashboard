import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";

const chartSetting = {
  width: 500,
  height: 300,
  sx: {
    // [`.${axisClasses.left} .${axisClasses.label}`]: {
    //   transform: "translate(-20px, 0)",

    // },
    [`.${axisClasses.tickLabel}, `]: {
   fill: '#fff',
    },
  },
};

const valueFormatter = (value) => `${value}`;
const Barchart = () => {
  const dataset = [
    {
      newYork: 60,
      day: "Sun",
    },
    {
      paris: 80,
      day: "Mon",
    },
    {
      newYork: 40,
      day: "Tue",
    },
    {
      newYork: 65,
      day: "Wed",
    },
    {
      newYork: 58,
      day: "Thu",
    },
    {
      paris: 24,
      day: "Fri",
    },
    {
      newYork: 60,
      day: "Sat",
    },
  ];
  return (
    <div>
      <BarChart
      sx={{paddingBottom: "40px"}}
        dataset={dataset}
        xAxis={[{ scaleType: "band", dataKey: "day" }]}
        series={[
          { dataKey: "london", label: "", color: "#fff", valueFormatter },
          { dataKey: "paris", label: "", valueFormatter },
          { dataKey: "newYork", label: "", valueFormatter },
        ]}
        borderRadius={4}
        grid={{ horizontal: true }}
        {...chartSetting}
      />
    </div>
  );
};

export default Barchart;
