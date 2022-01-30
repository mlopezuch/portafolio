import React from "react";
import "./MenuHeader.css";
import img from "./tofo.jpg";
import { Avatar } from "@mui/material";
import { Link, useMatch } from "react-router-dom";

function MenuHeader() {
  const CustomLink = (props) => {
    let match = useMatch(props.to);

    return <Link className={match ? "active" : ""} {...props} />;
  };

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
          <CustomLink to="/">SOBRE MI</CustomLink>
          <CustomLink to="/proyectos">PROYECTOS</CustomLink>
          <CustomLink to="/contacto">CONTACTO</CustomLink>
        </div>
      </div>
    </div>
  );
}

export default MenuHeader;
