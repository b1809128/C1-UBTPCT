import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import { BiCalendar } from "react-icons/bi";
import { FaUserAstronaut } from "react-icons/fa";
function TimetableTab() {
  let timeObj = [
    { night: "18h-21h", morning: "6h-9h" },
    { night: "21h-23h30", morning: "9-11h30" },
    { night: "23h30-1h30", morning: "11h30-13h30" },
    { night: "1h30-3h", morning: "13h30-15h" },
    { night: "3h-4h30", morning: "15h-16h30" },
    { night: "4h30-6h", morning: "16h30-18h" },
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

      <Tabs
        defaultActiveKey={
          new Date().getHours() >= 18 || new Date().getHours() <= 6 ? 1 : 2
        }
        id="uncontrolled-tab-example"
      >
        <Tab eventKey={1} title="Ca Tối">
          {timeObj.map((data) => {
            return (
              <div class="dvc-timtbl-gate2">
                <div class="dvc-timtbl-gate-text1">{data.night}</div>
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
          {timeObj.map((data) => {
            return (
              <div class="dvc-timtbl-gate2">
                <div class="dvc-timtbl-gate-text1">{data.morning}</div>
                <div class="dvc-timtbl-gate-text2"> Tên A - Tên B</div>
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
