import React from "react";
import { LineChart } from "@mui/x-charts";
import { Grid } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Productdetail from "./Productdetail/Productdetail";
import Barchart from "./chart/Barchart";
import Salesreport from "./Salesreport/Salesreport";
import Button from "@mui/material/Button";
import SaveAltOutlinedIcon from "@mui/icons-material/SaveAltOutlined";
import Navbar from "../Navbar/Navbar";

const xLabels = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const Dashboard = () => {
  const [report, setReport] = React.useState("");
  const handleChange = (event) => {
    setReport(event.target.value);
  };

  return (
    <div>
      <Navbar />
      <div className="main_dashboard">
        <div className="product_heading">Product</div>
        <Grid container spacing={4}>
          <Grid item xs={5}>
            <div className="chart_box">
              <div className="a_cont">
                <h3 className="invent_text">
                  Inventory Aging <br /> Report
                </h3>
                <div>
                  <FormControl
                    fullWidth
                    sx={{ background: "#212F3C", borderRadius: 2 }}
                  >
                    <Select
                      sx={{ width: 110, height: 45, color: "white" }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={report}
                      label="Weekly"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Weekly</MenuItem>
                      <MenuItem value={20}>Monthly</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
              <Barchart />
            </div>
          </Grid>
          <Grid item xs={7}>
            {" "}
            <Productdetail />
          </Grid>
          <Grid item xs={5}>
            <div className="chart_box">
              <Salesreport />
            </div>
          </Grid>
          <Grid item xs={7}>
            <div className="chart_box">
              <div className="a_cont">
                <h3 className="invent_text">Inventory on-hand Information </h3>
                {/* <span >Lorem ipsum is simply dummy text of the printing and typesetting </span> */}
                <div>
                  <Button
                    variant="outlined"
                    sx={{
                      textTransform: "capitalize",
                      borderRadius: "5px",
                      background: "#212F3C",
                      border: "none",
                      color: "blue",
                    }}
                    size="medium"
                    startIcon={<SaveAltOutlinedIcon />}
                  >
                    Save Report
                  </Button>
                </div>
              </div>
              <LineChart
                xAxis={[{ scaleType: "point", data: xLabels }]}
                series={[
                  {
                    data: [1, 4.5, 2, 8.5, 1.5, 6, 3],
                    area: true,
                  },
                ]}
                width={800}
                height={300}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Dashboard;
