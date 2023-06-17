import React from "react";
import "./footer.css";
import { Container } from "@mui/material";
function Footer() {
  return (
    <div className="dvc-footer">
      <Container maxWidth="lg">
        <div className="dvc-footer-logo">
          <div className="dvc-logo-text">
            <div className="dvc-headline">
              HỆ THỐNG QUẢN LÝ C1-UBND TP. CẦN THƠ
            </div>
          </div>
          <div className="dvc-image">
            <img
              alt="logo-cong-an"
              src="https://dichvucong.bocongan.gov.vn/apps/bocongan/resources/image/huy-hieu-cong-an-nhan.png"
              width={60}
            />
          </div>
          <div className="dvc-footer-address" >
            <p style={{fontWeight:500}}>02, Đại lộ Hòa Bình, P. Tân An, Q. Ninh Kiều, Thành phố Cần Thơ</p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
