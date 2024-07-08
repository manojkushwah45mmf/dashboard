import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { blue } from "@mui/material/colors";

const Productdetailtable = () => {
  function createData(item: string, quantity: number) {
    return { item, quantity };
  }
  const rows = [
    createData("Item Number", "SOD 493"),
    createData("Item Name", "Soda 330 ml can"),
    createData("Item Group", "40-Soda"),
    createData("Item subGroup ", "4010-Sugar free soda"),
    createData("Item Model Group", "FIFO"),
    createData("Unit", "pcs"),
    createData("Retail Price", "0.99 USD"),
  ];

  return (
    <div>
      <TableContainer component={Paper}>
        <Table
          sx={{
            minWidth: 300,
            background: "black",
            border: "1px solid lightgray",
          }}
          aria-label="simple table"
          size="small"
        >
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.item}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" sx={{ color: "#fff" }}>
                  {row.item}
                </TableCell>
                <TableCell sx={{ color: "#fff" }}>{row.quantity}</TableCell>
              </TableRow>
            ))}
            <TableCell>
              <TableRow sx={{ color: "white" }}>Financial</TableRow>
            </TableCell>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Productdetailtable;
