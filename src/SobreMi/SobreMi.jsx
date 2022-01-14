import React from 'react'
import './SobreMi.css'
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
import firebase from './img/firebase.png'
import socketio from './img/socketio.png'
import Tooltip from "@mui/material/Tooltip";

function SobreMi() {
    return (
        <section className="SobreMi">
          <h1>¡Bienvenid@! 👋</h1>
          <p>
            Mi nombre es Matías López, soy un desarrollador fullstack de
            Santiago, Chile. Actualmente estoy trabajando en un megaproyecto
            personal hecho en el stack MERN llamado{" "}
            <a href="http://teamptu-beta.web.app" target="_blank" rel="noreferrer">
              <i>TeamPTU</i>
            </a>
            , una plataforma de preparación para la Prueba de Transición a la
            Educación Superior que dispone de un completo sistema de login,
            generador de ensayos, herramientas de simulación de puntaje, entre
            otras cosas 😄.
          </p>

          <h2>Mi experiencia:</h2>
          <AvatarGroup
            sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
            max={16}
          >


            <Tooltip title="HTML" arrow>
              <Avatar sx={{ width: 60, height: 60 }} alt="HTML" src={html} />
            </Tooltip>

            <Tooltip title="CSS" arrow>
              <Avatar sx={{ width: 60, height: 60 }} alt="CSS" src={css} />
            </Tooltip>

            <Tooltip title="JavaScript" arrow>
              <Avatar sx={{ width: 60, height: 60 }} alt="JS" src={js} />
            </Tooltip>

            <Tooltip title="Node JS" arrow>
              <Avatar
                sx={{ width: 60, height: 60 }}
                alt="NodeJS"
                src={nodejs}
              />
            </Tooltip>

            <Tooltip title="MongoDB" arrow>
              <Avatar
                sx={{ width: 60, height: 60 }}
                alt="MongoDB"
                src={mongodb}
              />
            </Tooltip>

            <Tooltip title="ReactJS" arrow>
              <Avatar
                sx={{ width: 60, height: 60 }}
                alt="ReactJS"
                src={reactjs}
              />
            </Tooltip>

            <Tooltip title="ExpressJS" arrow>
              <Avatar
                sx={{ width: 60, height: 60 }}
                alt="Express"
                src={express}
              />
            </Tooltip>

            <Tooltip title="Git" arrow>
              <Avatar sx={{ width: 60, height: 60 }} alt="Git" src={git} />
            </Tooltip>

            <Tooltip title="Firebase" arrow>
              <Avatar sx={{ width: 60, height: 60 }} alt="Firebase" src={firebase} />
            </Tooltip>

            <Tooltip title="Socket.IO" arrow>
              <Avatar sx={{ width: 60, height: 60 }} alt="SocketIO" src={socketio} />
            </Tooltip>

          </AvatarGroup>
        </section>
    )
}

export default SobreMi
