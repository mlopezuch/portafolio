import React from "react";
import "./SobreMi.css";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import html from "./img/html.png";
import css from "./img/css.png";
import js from "./img/js.png";
import nodejs from "./img/node.png";
import mongodb from "./img/mongodb.png";
import reactjs from "./img/react.png";
import express from "./img/express.png";
import git from "./img/git.png";
import firebase from "./img/firebase.png";
import socketio from "./img/socketio.png";
import bootstrap from "./img/bootstrap.svg";
import sass from "./img/sass.svg";
import mui from "./img/mui.svg";
import heroku from "./img/heroku.svg";
import netlify from "./img/netlify.svg";
import github from "./img/github.svg";
import jest from "./img/jest.svg";

import Tooltip from "@mui/material/Tooltip";

function SobreMi() {
  return (
    <section className="SobreMi">
      <h1>¡Hola! 👋</h1>
      <p>
        Mi nombre es Matías Castro García, soy un desarrollador fullstack de
        Santiago de Chile con más de 3 años de experiencia en React, Express,
        MongoDB y Node.js. Apasionado por <b>JavaScript</b>, el código
        legible, la comunicación fluída entre los equipos y las soluciones
        óptimas para cada problema y plazo.
      </p>

      <p>
        {" "}
        Actualmente estoy trabajando en un megaproyecto personal hecho en el
        stack MERN llamado{" "}
        <a href="http://teamptu-beta.web.app" target="_blank" rel="noreferrer">
          <i>TeamPTU</i>
        </a>
        , una plataforma de preparación para las pruebas de admisión a la
        universidad en Chile que dispone de un completo sistema de login,
        generador de ensayos, sistema de corrección, entre otras cosas.
      </p>

      <h2>Stack de desarrollo</h2>

      <div className="stack">
        <p>Frontend:</p>
        <div className="brands">
          <Tooltip title="HTML" arrow>
            <Avatar sx={{ width: 40, height: 40 }} alt="HTML" src={html} />
          </Tooltip>

          <Tooltip title="CSS" arrow>
            <Avatar sx={{ width: 40, height: 40 }} alt="CSS" src={css} />
          </Tooltip>

          <Tooltip title="JavaScript" arrow>
            <Avatar sx={{ width: 40, height: 40 }} alt="JS" src={js} />
          </Tooltip>

          <Tooltip title="ReactJS" arrow>
            <Avatar
              sx={{ width: 40, height: 40 }}
              alt="ReactJS"
              src={reactjs}
            />
          </Tooltip>

          <Tooltip title="Material UI" arrow>
            <Avatar
              sx={{ width: 40, height: 40 }}
              alt="Material UI"
              src={mui}
            />
          </Tooltip>

          <Tooltip title="Bootstrap" arrow>
            <Avatar
              sx={{ width: 40, height: 40 }}
              alt="Bootstrap"
              src={bootstrap}
            />
          </Tooltip>

          <Tooltip title="Sass" arrow>
            <Avatar sx={{ width: 40, height: 40 }} alt="Sass" src={sass} />
          </Tooltip>
        </div>
      </div>

      <div className="stack">
        <p>Backend: </p>
        <AvatarGroup
          sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
          max={16}
        >
          <Tooltip title="Node.js" arrow>
            <Avatar sx={{ width: 40, height: 40 }} alt="Node.js" src={nodejs} />
          </Tooltip>

          <Tooltip title="ExpressJS" arrow>
            <Avatar
              sx={{ width: 40, height: 40 }}
              alt="Express"
              src={express}
            />
          </Tooltip>

          <Tooltip title="Socket.IO (front y back)" arrow>
            <Avatar
              sx={{ width: 40, height: 40 }}
              alt="SocketIO"
              src={socketio}
            />
          </Tooltip>
        </AvatarGroup>
      </div>

      <div className="stack">
        <p>Gestión de proyectos: </p>
        <AvatarGroup
          sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
          max={16}
        >
          <Tooltip title="Git" arrow>
            <Avatar sx={{ width: 40, height: 40 }} alt="Git" src={git} />
          </Tooltip>

          <Tooltip title="GitHub" arrow>
            <Avatar sx={{ width: 40, height: 40 }} alt="GitHub" src={github} />
          </Tooltip>
        </AvatarGroup>
      </div>

      <div className="stack">
        <p>Bases de datos: </p>
        <AvatarGroup
          sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
          max={16}
        >
          <Tooltip title="MongoDB" arrow>
            <Avatar
              sx={{ width: 40, height: 40 }}
              alt="MongoDB"
              src={mongodb}
            />
          </Tooltip>

          <Tooltip title="Firebase" arrow>
            <Avatar
              sx={{ width: 40, height: 40 }}
              alt="Firebase"
              src={firebase}
            />
          </Tooltip>
        </AvatarGroup>
      </div>

      <div className="stack">
        <p>Servicios en la nube: </p>
        <AvatarGroup
          sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
          max={16}
        >
          <Tooltip title="Heroku" arrow>
            <Avatar sx={{ width: 40, height: 40 }} alt="Heroku" src={heroku} />
          </Tooltip>

          <Tooltip title="Netlify" arrow>
            <Avatar
              sx={{ width: 40, height: 40 }}
              alt="Netlify"
              src={netlify}
            />
          </Tooltip>
        </AvatarGroup>
      </div>

      <div className="stack">
        <p>Testing: </p>
        <AvatarGroup
          sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
          max={16}
        >
          <Tooltip title="Jest" arrow>
            <Avatar sx={{ width: 50, height: 50 }} alt="Jest" src={jest} />
          </Tooltip>

        </AvatarGroup>
      </div>
    </section>
  );
}

export default SobreMi;
