import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import { BiCalendar } from "react-icons/bi";
import { FaUserAstronaut } from "react-icons/fa";
function TimetableTab() {
  let timeLineNight = [
    "18h-21h",
    "21h-23h30",
    "23h30-1h30",
    "1h30-3h",
    "3h-4h30",
    "4h30-6h",
  ];

  return (
    <>
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
          <BiCalendar /> Lịch trực UBND TP. Cần Thơ
        </h1>
        <div class="dvc-timtbl-gate">
          <div class="dvc-timtbl-gate-text">Thời gian / Cổng</div>
          <div class="dvc-timtbl-gate-text">Cổng A</div>
          <div class="dvc-timtbl-gate-text">Cổng B</div>
          <div class="dvc-timtbl-gate-text">Cổng C</div>
        </div>{" "}
      </div>

      <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
        <Tab eventKey={1} title="Ca Tối">
          {timeLineNight.map((data) => {
            return (
              <div class="dvc-timtbl-gate2">
                <div class="dvc-timtbl-gate-text1">{data}</div>
                <div class="dvc-timtbl-gate-text2">
                  {" "}
                  <FaUserAstronaut /> - Quốc Huy
                </div>
                <div class="dvc-timtbl-gate-text2">
                  <FaUserAstronaut /> - Phước Duy
                </div>
                <div class="dvc-timtbl-gate-text2">
                  <FaUserAstronaut /> - Nhựt Kha
                </div>
              </div>
            );
          })}
        </Tab>
        <Tab eventKey={2} title="Ca Sáng">
          {timeLineNight.map((data) => {
            return (
              <div class="dvc-timtbl-gate2">
                <div class="dvc-timtbl-gate-text1">{data}</div>
                <div class="dvc-timtbl-gate-text2">
                  {" "}
                  Tên A - Tên B
                </div>
                <div class="dvc-timtbl-gate-text2">Phước Duy</div>
                <div class="dvc-timtbl-gate-text2">Nhựt Kha</div>
              </div>
            );
          })}
        </Tab>
      </Tabs>
    </>
  );
}

export default TimetableTab;
