import React from "react";
import NavBar from "../components/NavBar/NavBar";
import { Button, Grid } from "@mui/material";
import useStyles from "./VacantesStyles";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { db } from "../Firebase";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router";

function DetalleVacante() {
  const navigate = useNavigate();
  const classes = useStyles();
  const { id: docId } = useParams();
  const vacanteRef = doc(db, "vacantes", docId);
  let infoVacante = {};
  const [vacante, setVacante] = useState([]);
  const getVacante = async () => {
    const doc = await getDoc(vacanteRef);
    console.log(doc);
    infoVacante = doc.data();
    console.log(infoVacante);
    setVacante(infoVacante);
  };
  useEffect(() => {
    getVacante();
  }, []);

  return (
    <div>
      <NavBar />
      <Grid>
        <img
          className={classes.banner}
          src={process.env.PUBLIC_URL + "/Truck-banner.jpg"}
          alt=""
        />
      </Grid>
      <Grid className={classes.title}>
        <h2
          style={{
            color: "white",
          }}
        >
          Vacantes
        </h2>
      </Grid>
      <Grid container marginBottom="2rem">
        <Grid item xs={1}></Grid>
        <Grid
          display="flex"
          alignItems="flex-start"
          justifyContent="flex-start"
          flexDirection="column"
          paddingLeft="2rem"
          item
          xs={2}
        >
          <Button
            style={{ marginTop: "1rem" }}
            variant="outlined"
            onClick={() => {
              navigate("/vacantes");
            }}
          >
            Volver
          </Button>
          <h4 className={classes.leftBox}>Departamento</h4>
          <p className={classes.leftBox} style={{ fontSize: 13 }}>
            ---
          </p>
          <h4 className={classes.leftBox}>Ubicación</h4>
          <p className={classes.leftBox} style={{ fontSize: 13 }}>
            {vacante.ubication ? vacante.ubication : "---"}
          </p>
          <h4 className={classes.leftBox}>Publicación</h4>
          <p className={classes.leftBox} style={{ fontSize: 13 }}>
            {vacante.date ? vacante.date : "---"}
          </p>
          <h4 className={classes.leftBox}>Vigencia</h4>
          <p className={classes.leftBox} style={{ fontSize: 13 }}>
            {vacante.deadline ? vacante.deadline : "---"}
          </p>
        </Grid>
        <Grid
          display="flex"
          alignItems="flex-start"
          justifyContent="flex-start"
          flexDirection="column"
          paddingLeft="2rem"
          item
          xs={7}
        >
          <h2>{vacante.name}</h2>
          <h4 className={classes.leftBox}>Descripción del empleo</h4>
          <p className={classes.leftBox} style={{ fontSize: 13 }}>
            {vacante.description}
          </p>
          <h4 className={classes.leftBox}>Requisitos</h4>
          {vacante.requirement
            ? vacante.requirement.map((vac) => {
                return (
                  <p className={classes.leftBox} style={{ fontSize: 13 }}>
                    {"- " + vac}
                  </p>
                );
              })
            : ""}

          <h4 className={classes.leftBox}>Experiencia</h4>
          <p className={classes.leftBox} style={{ fontSize: 13 }}>
            {vacante.experience}
          </p>
          <h4 className={classes.leftBox}>Conocimientos</h4>
          {vacante.requirement
            ? vacante.skills.map((vac) => {
                return (
                  <p className={classes.leftBox} style={{ fontSize: 13 }}>
                    {"- " + vac}
                  </p>
                );
              })
            : ""}
          <h4 className={classes.leftBox}>Idiomas</h4>
          <p className={classes.leftBox} style={{ fontSize: 13 }}>
            {vacante.language}
          </p>
        </Grid>
      </Grid>
    </div>
  );
}
export default DetalleVacante;
