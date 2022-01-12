import * as React from "react";
import "./Formulario.css";
import TextField from "@mui/material/TextField";
import { Button, Grid, Paper } from "@mui/material";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};

  if (!values.nombre) {
    errors.nombre = "Campo requerido";
  } else if (values.nombre.length > 20) {
    errors.nombre = "El nombre debe ser menor a 20 caracteres.";
  }

  if (!values.email) {
    errors.email = "Campo requerido";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Ingresa un correo válido.";
  }

  if (!values.asunto) {
    errors.asunto = "Campo requerido";
  }

  if (!values.mensaje) {
    errors.mensaje = "Campo requerido";
  }

  return errors;
};

function Formulario() {
  const formik = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      asunto: "",
      mensaje: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const Item = ({ children }) => {
    return <Paper elevation={0}>{children}</Paper>;
  };

  return (
    <form onSubmit={formik.handleSubmit} autoComplete="off">
      {/* <Paper elevation={3} sx={{padding:'25px',borderRadius:'5px'}}> */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="nombre"
            name="nombre"
            label="Nombre"
            fullWidth
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.nombre}
            error={Boolean(formik.touched.nombre && formik.errors.nombre)}
            helperText={
              formik.touched.nombre && formik.errors.nombre
                ? formik.errors.nombre
                : ""
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="email"
            name="email"
            type="email"
            label="Email"
            fullWidth
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            error={Boolean(formik.touched.email && formik.errors.email)}
            helperText={
              formik.touched.email && formik.errors.email
                ? formik.errors.email
                : ""
            }
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="asunto"
            name="asunto"
            fullWidth
            label="Asunto"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.asunto}
            error={Boolean(formik.touched.asunto && formik.errors.asunto)}
            helperText={
              formik.touched.asunto && formik.errors.asunto
                ? formik.errors.asunto
                : ""
            }
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="mensaje"
            name="mensaje"
            fullWidth
            multiline
            rows={5}
            label="Mensaje"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.mensaje}
            error={Boolean(formik.touched.mensaje && formik.errors.mensaje)}
            helperText={
              formik.touched.mensaje && formik.errors.mensaje
                ? formik.errors.mensaje
                : ""
            }
          />
        </Grid>

        <Grid item xs={12}>
          <Button type="submit" fullWidth size="large" variant="contained">
            Enviar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default Formulario;
