import React, { useState, useEffect } from "react";
// import { Grid } from "@mui/material";
import { BiCalendar } from "react-icons/bi";
import "./timetable.css";

function TimetableUB() {
  let timeObj = [
    {
      hours: 27,
      minutes: 0,
      timeStr: "7h00",
      element: `- Chủ tịch và các Phó Chủ tịch dự Lễ khởi công dự án đầu tư
    xây dựng đường bộ cao tốc Châu Đốc - Cần Thơ - Sóc Trăng giai
    đoạn 1, dự án thành phần 2 đoạn qua địa bàn thành phố Cần Thơ.
    Điểm tại ấp Thới Hiệp 2, xã Đông Thắng, huyện Cờ Đỏ, thành phố
    Cần Thơ.`,
      note: "Có thư mời",
    },
    {
      hours: 27,
      minutes: 30,
      timeStr: "7h30",
      element: `- Chủ tịch và các Phó Chủ tịch dự Lễ khởi công dự án đầu tư
    xây dựng đường bộ cao tốc Châu Đốc - Cần Thơ - Sóc Trăng giai
    đoạn 1.`,
      note: "Có thư mời",
    },
    {
      hours: 28,
      minutes: 30,
      timeStr: "8h30",
      element: `- Chủ tịch Trần Việt Trường tiếp và làm việc với Đoàn công tác của
    thành phố Nasushiobara, tỉnh Tochigi, Nhật Bản. Điểm tại Hội trường
    UBND thành phố`,
      note: "Có thư mời",
    },
    {
      hours: 29,
      minutes: 0,
      timeStr: "10h00",
      element: "Tiếp công dân định kỳ. Ban tiếp công dân.",
      note: "",
    },
    {
      hours: 30,
      minutes: 30,
      timeStr: "14h30",
      element: "Giao ban Ban cán sự UBND. Thường trực UBND dự họp.",
      note: "Làm việc nội bộ",
    },
  ];

  const [timeNow] = useState(new Date());
  const [getTime, setGetTime] = useState(timeNow.getMinutes());
  // let getTimeNow = new Date();
  // var timeNow = getTimeNow.getMinutes();

  const MINUTE_MS = 60000;

  useEffect(() => {
    const interval = setInterval(() => {
      setGetTime(timeNow.getMinutes());

      // console.log("Logs every minute");
    }, MINUTE_MS);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, [timeNow]);

  // console.log(getTime);
  setTimeout(() => {
    window.location.reload();
  }, MINUTE_MS);

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
      {timeObj.map((data) => {
        if (data.hours >= getTime) {
          return (
            <div class="dvc-timtbl-gate2">
              <div class="dvc-timtbl-gate-text1" style={{ width: "200px" }}>
                {/* 7h30 */}
                {data.timeStr}
              </div>
              <div class="dvc-timtbl-gate-text3" style={{ width: "600px" }}>
                {data.element}
              </div>
              <div class="dvc-timtbl-gate-text1" style={{ width: "200px" }}>
                {data.note}
              </div>
            </div>
          );
        } else return <></>;
      })}
      {/* <div class="dvc-timtbl-gate2">
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
      </div> */}
    </div>
  );
}

export default TimetableUB;
