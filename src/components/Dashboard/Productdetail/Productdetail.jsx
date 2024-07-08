import React from "react";
import soda_img from "../../common/images/soda_img.png";
import { Grid } from "@mui/material";
import Productdetailtable from "./Productdetailtable";


const Productdetail = () => {
  return (
    <div className="chart_box">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          {" "}
          <div className="product_detail">
            <img src={soda_img} alt="" width={300} />
          </div>{" "}
        </Grid>
        <Grid item xs={6}>
          <h3 className="invent_text">Product detail</h3>
          <Productdetailtable/>
        </Grid>
      </Grid>
    </div>
  );
};

export default Productdetail;
