import { Grid } from "@mui/material";
import React from "react";
import CalendarComponent from "../../components/calendar/calendar";
import { BiNews } from "react-icons/bi";
import { AiOutlineDownload } from "react-icons/ai";
function Download() {
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
            <BiNews /> Tải mẫu đơn
          </h1>
          <p className="dvc-content-ul">
            <AiOutlineDownload className="dvc-icon" />
            <a href="/file/c1pk02.docx" className="dvc-link">
              Đơn xin nghỉ phép năm
            </a>
          </p>
          <p className="dvc-content-ul">
            <AiOutlineDownload className="dvc-icon" />{" "}
            <a href="/file/c1pk02.docx" className="dvc-link">
              Đơn xin vào Đảng
            </a>
          </p>
          <p className="dvc-content-ul">
            <AiOutlineDownload className="dvc-icon" />{" "}
            <a href="/file/c1pk02.docx" className="dvc-link">
              Đơn xin đi học, ôn thi Đại học
            </a>
          </p>
          <p className="dvc-content-ul">
            <AiOutlineDownload className="dvc-icon" />{" "}
            <a href="/file/c1pk02.docx" className="dvc-link">
              Đơn cam kết xét chuyên nghiệp CAND
            </a>
          </p>
          <p className="dvc-content-ul">
            <AiOutlineDownload className="dvc-icon" />{" "}
            <a href="/file/c1pk02.docx" className="dvc-link">
              Mẫu lý lịch trích ngang
            </a>
          </p>
          <p className="dvc-content-ul">
            <AiOutlineDownload className="dvc-icon" />{" "}
            <a href="/file/c1pk02.docx" className="dvc-link">
              Mẫu báo cáo tổng kết đơn vị
            </a>
          </p>
          <p className="dvc-content-ul">
            <AiOutlineDownload className="dvc-icon" />{" "}
            <a href="/file/c1pk02.docx" className="dvc-link">
              Mẫu kê khai Đoàn viên
            </a>
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

export default Download;
