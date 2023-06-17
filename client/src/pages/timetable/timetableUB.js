import React from "react";
// import { Grid } from "@mui/material";
import { BiCalendar } from "react-icons/bi";
import "./timetable.css";

function TimetableUB() {
  //   let timeLineNight = [
  //     "18h-21h",
  //     "21h-23h30",
  //     "23h30-1h30",
  //     "1h30-3h",
  //     "3h-4h30",
  //     "4h30-6h",
  //   ];

  return (
    <div
      className="dvc-header"
      style={{
        // height: "100vh",
        // backgroundColor: "#cfe8fc",
        marginTop: "20px",
        marginBottom: "20px",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      }}
    >
      <h1 className="dvc-headline dvc-headline-content">
        <BiCalendar /> Lịch làm việc UBND TP. Cần Thơ
      </h1>
      <div class="dvc-timtbl-gate">
        <div class="dvc-timtbl-gate-text" style={{ width: "200px" }}>
          Thời gian
        </div>
        <div class="dvc-timtbl-gate-text" style={{ width: "600px" }}>
          Nội dung
        </div>
        <div class="dvc-timtbl-gate-text" style={{ width: "200px" }}>
          Ghi chú
        </div>
      </div>
      <div class="dvc-timtbl-gate2">
        <div class="dvc-timtbl-gate-text1" style={{ width: "200px" }}>
          7h30
        </div>
        <div class="dvc-timtbl-gate-text3" style={{ width: "600px" }}>
          {" "}
          - Chủ tịch và các Phó Chủ tịch dự Lễ khởi công dự án đầu tư xây dựng
          đường bộ cao tốc Châu Đốc - Cần Thơ - Sóc Trăng giai đoạn 1, dự án
          thành phần 2 đoạn qua địa bàn thành phố Cần Thơ. Điểm tại ấp Thới Hiệp
          2, xã Đông Thắng, huyện Cờ Đỏ, thành phố Cần Thơ.
        </div>
        <div class="dvc-timtbl-gate-text1" style={{ width: "200px" }}></div>
      </div>
      <div class="dvc-timtbl-gate2">
        <div class="dvc-timtbl-gate-text1" style={{ width: "200px" }}>
          8h00
        </div>
        <div class="dvc-timtbl-gate-text3" style={{ width: "600px" }}>
          {" "}
          - Chủ tịch Trần Việt Trường tiếp và làm việc với Đoàn công tác của
          thành phố Nasushiobara, tỉnh Tochigi, Nhật Bản. Điểm tại Hội trường
          UBND thành phố
        </div>
        <div class="dvc-timtbl-gate-text1" style={{ width: "200px" }}>
          Có thư mời
        </div>
      </div>
    </div>
  );
}

export default TimetableUB;
