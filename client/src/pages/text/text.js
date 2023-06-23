import { Grid } from "@mui/material";
import React from "react";
import CalendarComponent from "../../components/calendar/calendar";
import { BiNews } from "react-icons/bi";
import { AiOutlineDownload } from "react-icons/ai";

function Text() {
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
            <BiNews /> Văn bản ban hành
          </h1>
          <p className="dvc-content-ul">
            <AiOutlineDownload className="dvc-icon" /> Thông tư 02/2021/TT-BCA
            Quy định về xử lý vi phạm điều lệnh CAND
          </p>
          <p className="dvc-content-ul">
            <AiOutlineDownload className="dvc-icon" /> Nghị Quyết 11-NQ/ĐUCA
          </p>
          <p className="dvc-content-ul">
            <AiOutlineDownload className="dvc-icon" /> Nghị định số
            59/2022/NĐ-CP Quy định về định danh và xác thực điện tử
          </p>
          <p className="dvc-content-ul">
            <AiOutlineDownload className="dvc-icon" /> Quyết định số 06/QĐ-TTg
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

export default Text;
