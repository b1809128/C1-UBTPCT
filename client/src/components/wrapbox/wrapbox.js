import { Grid } from "@mui/material";
import React from "react";
import CalendarComponent from "../calendar/calendar";
function Wrapbox() {
  return (
    <div
      className="dvc-header"
      style={{ height: "100vh", backgroundColor: "#cfe8fc", width: "1200px", marginTop: "20px"}}
    >
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          abc
        </Grid>
        <Grid item xs={6} md={4}>
          <div className="calendar-item">
            <CalendarComponent/>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Wrapbox;
