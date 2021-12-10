import React from "react";
import NavBar from "../components/NavBar/NavBar";
import { Link, Grid, Button } from "@mui/material";
import useStyles from "./VacantesStyles";
import { useEffect, useState } from "react";
import { db } from "../Firebase";
import { collection, getDocs } from "firebase/firestore";
import Footer from "../Footer/Footer";

function Vacantes() {
  const classes = useStyles();
  const vacanteRef = collection(db, "vacantes");
  const [vacantes, setVacantes] = useState([]);
  const getVacantes = async () => {
    const data = await getDocs(vacanteRef);
    console.log(data);
    setVacantes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  useEffect(() => {
    getVacantes();
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
      <Grid container>
        <Grid
          display="flex"
          alignItems="flex-start"
          justifyContent="flex-start"
          flexDirection="column"
          marginLeft="2rem"
          item
          xs={2}
        >
          <h3>Filtros</h3>
          <h4>Departamento</h4>
          <label style={{ fontSize: 14 }}>
            <input style={{ verticalAlign: "middle" }} type="checkbox" />
            Ventas
          </label>
          <label style={{ fontSize: 14 }}>
            <input style={{ verticalAlign: "middle" }} type="checkbox" />
            Tráfico
          </label>
          <label style={{ fontSize: 14 }}>
            <input style={{ verticalAlign: "middle" }} type="checkbox" />
            Administración
          </label>
          <label style={{ fontSize: 14 }}>
            <input style={{ verticalAlign: "middle" }} type="checkbox" />
            Mantenimiento
          </label>
          <label style={{ fontSize: 14 }}>
            <input style={{ verticalAlign: "middle" }} type="checkbox" />
            Operadores
          </label>
          <label style={{ fontSize: 14 }}>
            <input style={{ verticalAlign: "middle" }} type="checkbox" />
            Recursos Humanos
          </label>
          <label style={{ fontSize: 14 }}>
            <input style={{ verticalAlign: "middle" }} type="checkbox" />
            Ubicación
          </label>

          <h4>Ubicación</h4>
          <label style={{ fontSize: 14 }}>
            <input style={{ verticalAlign: "middle" }} type="checkbox" />
            Chihuahua
          </label>
          <label style={{ fontSize: 14 }}>
            <input style={{ verticalAlign: "middle" }} type="checkbox" />
            Cd. Juárez
          </label>
          <label style={{ fontSize: 14 }}>
            <input style={{ verticalAlign: "middle" }} type="checkbox" />
            El Paso
          </label>
          <Grid marginTop="1rem">
            <Button variant="outlined" size="small" color="primary">
              Limpiar filtros
            </Button>
          </Grid>
        </Grid>
        <Grid
          display="flex"
          alignItems="flex-start"
          justifyContent="flex-start"
          flexDirection="column"
          marginLeft="2rem"
          item
          xs={9}
        >
          <h3>Todas las vacantes</h3>

          {vacantes.map((vac) => {
            return (
              <Grid container>
                <Grid
                  display="flex"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                  xs={12}
                >
                  <Link
                    className={classes.text_footer}
                    href={"/vacante/" + vac.id}
                    underline="hover"
                    color="black"
                    marginBottom="1rem"
                    marginTop="0.5rem"
                    variant="h6"
                  >
                    {vac.name}
                  </Link>
                </Grid>
                <Grid
                  container
                  display="flex"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                  xs={12}
                  style={{ fontSize: 13 }}
                >
                  <Grid item xs={1} justify="left">
                    <p>{vac.ubication}</p>
                  </Grid>
                  <Grid item xs={3}>
                    <p>{"Fecha de publicación: " + vac.date}</p>
                  </Grid>
                  <Grid item xs={4}>
                    <p>{"Fecha de vigencia: " + vac.deadline}</p>
                  </Grid>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default Vacantes;
