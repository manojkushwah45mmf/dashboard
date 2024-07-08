import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

const Piechart = () => {
  return (
    <div>
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 62, color: "#F8BBD0" },
              { id: 2, value: 38, color: "#F7F9F9 " },
            ],
            innerRadius: 50,
            cx: 200,
          },
        ]}
        width={300}
        height={200}
      />
      <h4 className="tl_sale">Total Sale</h4>
    </div>
  );
};

export default Piechart;
