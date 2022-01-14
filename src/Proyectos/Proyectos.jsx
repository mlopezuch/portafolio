import React from "react";
import "./Proyectos.css";
import twitter from "./img/twitter-clon.png";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import Carrusel from "./Carrusel";

function Proyectos() {
  return (
    <div className="Proyectos">
      <h1>Mis proyectos</h1>

      <Grid
        container
        spacing={6}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Grid item md={8}>
          {/* Aqui un carrusel béllako */}
          {/* <img src={teamptu} alt="Team PTU" width="100%" /> */}

          <Carrusel />

          {/* Aquí termina el carrusel béllako */}
        </Grid>
        <Grid item md={4}>
          <h1>Team PTU</h1>
          <p>Plataforma SPA de resolución de ensayos hecha en el stack MERN</p>
          <ul>
            <li>Sistema de login y registro</li>
            <li>Generador de ensayos</li>
            <li>Estadísticas</li>
          </ul>
          <div className="button-div">
            <Button
              variant="contained"
              size="large"
              href="http://teamptu-beta.web.app"
              target="_blank"
            >
              Visitar
            </Button>
            <Button variant="contained" disabled>
              Ver repositorio
            </Button>
          </div>
        </Grid>

        <Grid item md={8}>
          <img src={twitter} alt="Twitter" width="100%" />
        </Grid>
        <Grid item md={4}>
          <h1>Clon de Twitter Web</h1>
          <p>
            Un simple clon de la interfaz gráfica de Twitter hecho con React y
            Firebase
          </p>
          {/* <ul>
            <li>Sistema de login y registro</li>
            <li>Generador de ensayos</li>
            <li>Estadísticas</li>
          </ul> */}
          <div className="button-div">
            <Button
              variant="contained"
              size="large"
              href="http://twitter-clon-21.web.app"
              target="_blank"
            >
              Visitar
            </Button>
            <Button variant="contained">Ver repositorio</Button>
          </div>
        </Grid>
      </Grid>

      {/* <div className="Proyectos__Container">
        <div className="Proyectos__Imagen">
          <img src={teamptu} alt="Team PTU" />
        </div>
        <div className="descripcion">
          <h1>Team PTU</h1>
        </div>
      </div> */}
    </div>
  );
}

export default Proyectos;
