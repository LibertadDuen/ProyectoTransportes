import React from "react";
import Carrusel from "./Carousel";
import NavBar from "../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import { Grid, Box, Button } from "@mui/material";
import useStyles from "./InicioStyles";
import { useNavigate } from "react-router-dom";

function Inicio() {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <div>
      <NavBar />
      <Grid>
        <Carrusel />
      </Grid>
      <Grid>
        <h3>Tipos de Remolque</h3>
        <Grid container marginBottom="2rem">
          <Grid item xs={3}>
            <Box boxShadow={3} className={classes.box}>
              <img
                className={classes.imgRemolques}
                src={process.env.PUBLIC_URL + "/cajaseca.jpg"}
                alt=""
              />
            </Box>

            <p>Caja Seca</p>
          </Grid>
          <Grid item xs={3}>
            <Box boxShadow={3} className={classes.box}>
              <img
                className={classes.imgRemolques}
                src={process.env.PUBLIC_URL + "/plataforma.jpg"}
                alt=""
              />
            </Box>

            <p>Plataforma</p>
          </Grid>
          <Grid item xs={3}>
            <Box boxShadow={3} className={classes.box}>
              <img
                className={classes.imgRemolques}
                src={process.env.PUBLIC_URL + "/lowboy.jpg"}
                alt=""
              />
            </Box>

            <p>Low Boy</p>
          </Grid>
          <Grid item xs={3}>
            <Box boxShadow={3} className={classes.box}>
              <img
                className={classes.imgRemolques}
                src={process.env.PUBLIC_URL + "/cajarefrigerada.jpg"}
                alt=""
              />
            </Box>

            <p>Caja Refrigerada</p>
          </Grid>
        </Grid>
      </Grid>
      <Grid>
        <Grid className={classes.title_vacantes}>
          <h2
            style={{
              color: "white",
            }}
          >
            Vacantes
          </h2>
        </Grid>
        <Grid className={classes.title_unete}>
          <h3 margin="auto">Únete a nuestro equipo de trabajo</h3>
        </Grid>
        <Grid
          container
          paddingLeft="7rem"
          paddingRight="7rem"
          marginBottom="2rem"
          display="flex"
        >
          <Grid item xs={4}>
            <Box boxShadow={3} className={classes.box_vacantes}>
              <img
                className={classes.imgVacantes}
                src={process.env.PUBLIC_URL + "/ventas.png"}
                alt=""
              />
              <h4 className={classes.text_box}>Ventas</h4>
              <p className={classes.text_box}>30 vacantes disponibles</p>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box boxShadow={3} className={classes.box_vacantes}>
              <img
                className={classes.imgVacantes}
                src={process.env.PUBLIC_URL + "/operador.jpg"}
                alt=""
              />
              <h4 className={classes.text_box}>Operadores</h4>
              <p className={classes.text_box}>30 vacantes disponibles</p>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box boxShadow={3} className={classes.box_vacantes}>
              <img
                className={classes.imgVacantes}
                src={process.env.PUBLIC_URL + "/mantenimiento.jpg"}
                alt=""
              />
              <h4 className={classes.text_box}>Mantenimiento</h4>
              <p className={classes.text_box}>30 vacantes disponibles</p>
            </Box>
          </Grid>
        </Grid>
        <Grid marginTop="4rem">
          <Button
            variant="outlined"
            size="small"
            color="primary"
            onClick={() => {
              navigate("/vacantes");
            }}
          >
            Ver todas las vacantes
          </Button>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default Inicio;
