import React from "react";
import useStyles from "../components/Inicio/InicioStyles";
import { Link, Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  const classes = useStyles();
  return (
    <div>
      <Grid
        marginTop="3rem"
        height="250px"
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        style={{
          backgroundImage:
            "url(https://vaellocampos.com/wp-content/uploads/banner-contacto.jpg)",
        }}
      >
        <h3>¿Tienes alguna duda?</h3>
        <Button
          variant="contained"
          size="small"
          color="primary"
          onClick={() => {
            navigate("/contacto");
          }}
        >
          Contáctanos
        </Button>
      </Grid>
      <Grid container marginBottom="2rem">
        <Grid
          item
          xs={2}
          display="flex"
          alignItems="flex-start"
          justifyContent="flex-start"
          flexDirection="column"
          paddingLeft="0.5rem"
        >
          <h4 className={classes.title_footer}>Servicios</h4>
          <p className={classes.text_footer}>Exportación/Importación</p>
          <p className={classes.text_footer}>Carga sobredimensionada</p>
          <p className={classes.text_footer}>Puerta a puerta</p>
          <p className={classes.text_footer}>Servicio Express</p>
          <p className={classes.text_footer}>Materiales Peligrosos</p>
        </Grid>
        <Grid
          display="flex"
          alignItems="flex-start"
          justifyContent="flex-start"
          flexDirection="column"
          paddingLeft="2rem"
          item
          xs={2}
        >
          <h4 className={classes.title_footer}>Vacantes</h4>
          <Link
            className={classes.text_footer}
            href="/vacantes"
            underline="hover"
            color="black"
            marginBottom="1rem"
            marginTop="0.5rem"
          >
            Buscar Vacantes
          </Link>
          <p className={classes.text_footer}>Editar vacantes</p>
        </Grid>
        <Grid
          display="flex"
          alignItems="flex-start"
          justifyContent="flex-start"
          flexDirection="column"
          item
          xs={2}
        >
          <h4 className={classes.title_footer}>Preguntas</h4>
          <p className={classes.text_footer}>Preguntas frecuentes</p>
          <p className={classes.text_footer}>Aviso de privacidad</p>
        </Grid>
        <Grid
          display="flex"
          alignItems="flex-start"
          justifyContent="flex-start"
          flexDirection="column"
          item
          xs={2}
        >
          <h4 className={classes.title_footer}>Nosotros</h4>
          <p className={classes.text_footer}>Nuestra Historia</p>
          <p className={classes.text_footer}>Misión</p>
          <p className={classes.text_footer}>Visión</p>
          <p className={classes.text_footer}>Valores</p>
        </Grid>
        <Grid item xs={4}>
          <h4 className={classes.title_footer}>Contacto</h4>
          <Grid
            display="flex"
            alignItems="flex-start"
            justifyContent="flex-start"
            flexDirection="column"
            item
            xs={2}
          >
            <h5>Chihuahua</h5>
            <p style={{ fontSize: 12, textAlign: "left" }}>
              Av. Nicolás Gogol #11386 Complejo Industrial Chihuahua CP. 31136
              Tel. (614)158-1100 Fax: Ext.118 ventas@trasoto.com
            </p>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </Grid>
    </div>
  );
}
