import React from "react";
import "./Proyectos.css";
import twitter from "./img/twitter-clon.png";
import memorice from './img/memorice.png'
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import Carrusel from "./Carrusel";

function Proyectos() {
  return (
    <div className="Proyectos">
      <h1>Mis proyectos</h1>
      <p>Desde lo más avanzado hasta lo más humilde :)</p>
      <Grid
        container
        spacing={6}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Grid item md={8}>
          <Carrusel />
        </Grid>
        <Grid item md={4}>
          <h1>TeamPTU</h1>
          <p>Una single-page app de resolución de ensayos hecha en el stack MERN.</p>
          <ul>
            <li>Sistema de login y registro</li>
            <li>Generador de ensayos</li>
            <li>Sistema de corrección</li>
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
            Un clon interactivo de la interfaz gráfica de Twitter hecho con React y
            Firebase
          </p>
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

        <Grid item md={8}>
          <img src={memorice} alt="Memorice" width="100%" />
        </Grid>
        <Grid item md={4}>
          <h1>Memorice</h1>
          <p>
            Un simple juego de memoria hecho en React más animaciones en CSS que guarda el puntaje en el localStorage.
          </p>
          <div className="button-div">
            <Button
              variant="contained"
              size="large"
              href="https://mlopezuch.github.io/memory-game/"
              target="_blank"
            >
              Visitar
            </Button>
            <Button variant="contained">Ver repositorio</Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Proyectos;
