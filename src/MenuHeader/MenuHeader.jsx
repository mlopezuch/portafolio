import React from "react";
import './MenuHeader.css'
import img from "./avatar.jpg";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

function MenuHeader() {
  return (
    <div className="Header">
      <Avatar
        alt="Matias"
        src={img}
        sx={{ width: 100, height: 100, marginRight: "4%" }}
      />
      <div className="header__section">
        <h1 className="logo">MATÍAS</h1>
        <div className="header__menu">
          <Link to="/">SOBRE MI</Link>
          <Link to="/proyectos">PROYECTOS</Link>
          <Link to="/contacto">CONTACTO</Link>
        </div>
      </div>
    </div>
  );
}

export default MenuHeader;
