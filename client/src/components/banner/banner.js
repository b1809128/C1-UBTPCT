import React from "react";
import "./banner.css";
import { Container } from "@mui/material";
function Banner() {
  return (
    <div className="dvc-top-banner">
      <Container maxWidth="lg">
        <div className="dvc-logo">
          <div className="dvc-image">
            <img
              alt="logo-cong-an"
              src="https://dichvucong.bocongan.gov.vn/apps/bocongan/resources/image/huy-hieu-cong-an-nhan.png"
              width={60}
            />
          </div>
          <div className="dvc-logo-text front-header">
            <div className="dvc-headline">HỆ THỐNG QUẢN LÝ</div>
            <h1 className="dvc-title">C1-UBND TP. CẦN THƠ</h1>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Banner;
