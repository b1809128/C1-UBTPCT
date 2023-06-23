import { Grid } from "@mui/material";
import React from "react";
import CalendarComponent from "../../components/calendar/calendar";
import { BiNews } from "react-icons/bi";
import { BsFiletypeDocx } from "react-icons/bs";
import "./home.css";
function Home() {
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
            <BiNews /> Tin tức mới
          </h1>
          <p className="dvc-content-ul">
            <BsFiletypeDocx className="dvc-icon" /> Báo cáo Tháng 6/2023
          </p>
          <p className="dvc-content-ul">
            <BsFiletypeDocx className="dvc-icon" /> Báo cáo kế hoạch công tác
            Đoàn viên Đại đội 1 năm 2022
          </p>
          <p className="dvc-content-ul">
            <BsFiletypeDocx className="dvc-icon" /> Báo cáo Kết quả công tác quý
            2 năm 2023
          </p>
          <p className="dvc-content-ul">
            <BsFiletypeDocx className="dvc-icon" /> Báo cáo hoạt động thi đua
            Tháng 3/2023
          </p>
          <p className="dvc-content-ul">
            <BsFiletypeDocx className="dvc-icon" /> Báo cáo công tác ứng trực
            Tháng 2/2023
          </p>
          <p className="dvc-content-ul">
            <BsFiletypeDocx className="dvc-icon" /> Báo cáo Tháng 6/2023
          </p>
          <p className="dvc-content-ul">
            <BsFiletypeDocx className="dvc-icon" /> Báo cáo kế hoạch công tác
            Đoàn viên Đại đội 1 năm 2022
          </p>
          <p className="dvc-content-ul">
            <BsFiletypeDocx className="dvc-icon" /> Báo cáo Kết quả công tác quý
            2 năm 2023
          </p>
          <p className="dvc-content-ul">
            <BsFiletypeDocx className="dvc-icon" /> Báo cáo hoạt động thi đua
            Tháng 3/2023
          </p>
          <p className="dvc-content-ul">
            <BsFiletypeDocx className="dvc-icon" /> Báo cáo công tác ứng trực
            Tháng 2/2023
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

export default Home;
