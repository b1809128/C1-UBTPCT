import React from "react";
import "./menu.css";
import { Container } from "@mui/material";
import { BsFillHouseFill } from "react-icons/bs";
import { Link } from "react-router-dom";
function Menu() {
  return (
    <div id="dvc-header-home" className="menu">
      <Container>
        <ul className="menu-list">
          <li
            className="menu-items active-menu"
            style={{ width: "50px", justifyContent: "center" }}
          >
            <Link to="/" className="menu-items-link">
              <BsFillHouseFill />
            </Link>
          </li>
          <li className="menu-items">
            <Link to="/tin-tuc-noi-bo" className="menu-items-link">
              Tin tức nội bộ
            </Link>
          </li>
          <li className="menu-items">
            <Link to="/lich-lam-viec-ubnd" className="menu-items-link">
              Lịch làm việc UBND
            </Link>
          </li>
          <li className="menu-items">
            <Link to="/lich-truc" className="menu-items-link">
              Lịch trực
            </Link>
          </li>
          <li className="menu-items">Văn bản</li>
          <li className="menu-items">
            <Link to="/tai-mau-don" className="menu-items-link">
              Tải mẫu đơn
            </Link>
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default Menu;
