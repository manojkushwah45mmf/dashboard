import React from "react";
import Piechart from "../chart/Piechart";

const Salesreport = () => {
  return (
    <div>
      <div  className="sales_ch">
      <h3 className="invent_text">Sales Report </h3>
      <div className="total_sales_checkbox">Total sale</div>
      </div> 
       <Piechart />
    </div>
  );
};

export default Salesreport;
