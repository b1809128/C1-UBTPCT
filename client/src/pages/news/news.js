import { Grid } from "@mui/material";
import React from "react";
import CalendarComponent from "../../components/calendar/calendar";
import { BiNews } from "react-icons/bi";
import { BsFiletypeDocx } from "react-icons/bs";

function News() {
  return (
    <div
      className="dvc-header"
      style={{
        // height: "100vh",
        // backgroundColor: "#cfe8fc",
        marginTop: "20px",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          <h1 className="dvc-headline dvc-headline-content">
            <BiNews /> Tin tức nội bộ
          </h1>
          <p className="dvc-content-ul">
            <BsFiletypeDocx className="dvc-icon" /> Phân công công tác Tháng
            6/2023
          </p>
          <p className="dvc-content-ul">
            <BsFiletypeDocx className="dvc-icon" /> Báo cáo công tác thu đoàn
            phí quý 3 năm 2023
          </p>
          <p className="dvc-content-ul">
            <BsFiletypeDocx className="dvc-icon" /> Thông báo lịch thi tuyển các
            trường CAND
          </p>
          <p className="dvc-content-ul">
            <BsFiletypeDocx className="dvc-icon" /> Thông báo đăng ký thi tuyển
            các trường CAND
          </p>
          <p className="dvc-content-ul">
            <BsFiletypeDocx className="dvc-icon" /> Biên bản giao ban tháng
            6/2023
          </p>
        </Grid>
        <Grid item xs={6} md={4}>
          {/* <div style={{display:"block"}}> */}
          <CalendarComponent />

          {/* </div> */}
        </Grid>
      </Grid>
    </div>
  );
}

export default News;
