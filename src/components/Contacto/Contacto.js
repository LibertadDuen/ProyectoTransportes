import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import { Grid, TextField, MenuItem, Button } from "@mui/material";
import useStyles from "../../vacantes/VacantesStyles";
import { countries, states } from "./Location";
import { useState } from "react";
import Notification from "../../Notification";
import { addDoc, collection } from "@firebase/firestore";
import { db } from "../../Firebase";

function Contacto() {
  const classes = useStyles();
  const contactoRef = collection(db, "contacto");
  const [data, setData] = useState(
    {
      name: "",
      email: "",
      celnumber: "",
      number: "",
      country: "",
      state: "",
      city: "",
      CP: "",
      message: "",
    },
    []
  );
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const createContact = async () => {
    await addDoc(contactoRef, { ...data });
  };
  const onContactSubmit = async (e) => {
    e.preventDefault();
    if (!data.name || !data.celnumber || !data.email) {
      setNotify({
        isOpen: true,
        message: "Campos obligatorios vacíos",
        type: "error",
      });
    }
    if (data.name && data.celnumber && data.email) {
      createContact();
    }
  };
  console.log(data);
  return (
    <div>
      <NavBar />
      <Grid container marginTop="4rem">
        <Grid item xs={3}></Grid>
        <Grid
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          item
          xs={6}
        >
          <h2>Contacto</h2>
          <Grid container>
            <Grid
              display="flex"
              alignItems="Flex-start"
              justifyContent="flex-start"
              flexDirection="column"
              item
              xs={5}
            >
              <h4 className={classes.leftBox}>Nombre Completo*</h4>
              <TextField
                onChange={handleChange}
                fullWidth="true"
                size="small"
                variant="outlined"
                name="name"
              />
              <h4 className={classes.leftBox}>Número Celular*</h4>
              <TextField
                onChange={handleChange}
                fullWidth="true"
                size="small"
                variant="outlined"
                name="celnumber"
              />
              <h4 className={classes.leftBox}>País</h4>
              <TextField
                required
                size="small"
                id="country"
                name="country"
                variant="outlined"
                fullWidth
                onChange={handleChange}
                select
                InputLabelProps={{
                  shrink: true,
                }}
              >
                {countries.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <h4 className={classes.leftBox}>Ciudad</h4>
              <TextField
                onChange={handleChange}
                fullWidth="true"
                size="small"
                variant="outlined"
                name="city"
              />
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid
              display="flex"
              alignItems="flex-start"
              justifyContent="flex-start"
              flexDirection="column"
              item
              xs={5}
            >
              <h4 className={classes.leftBox}>Correo Electrónico*</h4>
              <TextField
                onChange={handleChange}
                name="email"
                fullWidth="true"
                size="small"
                variant="outlined"
              />
              <h4 className={classes.leftBox}>Número Telefónico</h4>
              <TextField
                onChange={handleChange}
                fullWidth="true"
                size="small"
                variant="outlined"
                name="number"
              />
              <h4 className={classes.leftBox}>Estado</h4>
              <TextField
                required
                id="state"
                name="state"
                variant="outlined"
                size="small"
                fullWidth
                onChange={handleChange}
                select
                InputLabelProps={{
                  shrink: true,
                }}
              >
                {states.map((stateOption) =>
                  stateOption[data.country]?.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))
                )}
              </TextField>
              <h4 className={classes.leftBox}>Código Postal</h4>
              <TextField
                onChange={handleChange}
                fullWidth="true"
                size="small"
                variant="outlined"
                name="CP"
              />
            </Grid>
          </Grid>
          <Grid
            display="flex"
            alignItems="flex-start"
            justifyContent="flex-start"
            flexDirection="column"
          >
            <h4 className={classes.leftBox}>Mensaje</h4>
            <TextField
              onChange={handleChange}
              style={{ width: "615px" }}
              size="small"
              variant="outlined"
              name="message"
            />
          </Grid>
          <Grid marginTop="3rem">
            <Button variant="contained" onClick={onContactSubmit}>
              Enviar
            </Button>
          </Grid>
        </Grid>
        <Grid marginTop="3rem" style={{ backgroundColor: "#eeeeee" }} container>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <Grid>
              <h3>Instalaciones</h3>
            </Grid>
            <Grid
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="row"
              container
            >
              <Grid
                display="flex"
                alignItems="center"
                justifyContent="center"
                alignSelf="baseline"
                flexDirection="column"
                item
                paddingX="1rem"
                xs={4}
              >
                <img
                  height="100px"
                  style={{ borderRadius: "10%", maxWidt: "150px" }}
                  src={process.env.PUBLIC_URL + "/oficina1.jpg"}
                  alt=""
                />
                <h5>Chihuahua, Chih.</h5>
                <p style={{ fontSize: 12 }}>
                  Ave. Nicolás Gogol 11386 Complejo Industrial Chihuahua,
                  Chihuahua, Chih. 31136 Tel.(614)158-1100
                </p>
              </Grid>
              <Grid
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                alignSelf="baseline"
                item
                paddingX="1rem"
                xs={4}
              >
                <img
                  height="100px"
                  style={{ borderRadius: "10%", maxWidt: "150px" }}
                  src={process.env.PUBLIC_URL + "/oficina2.jpg"}
                  alt=""
                />
                <h5>Cd. Juarez, Chih.</h5>
                <p style={{ fontSize: 12 }}>
                  Manuel J. Clouthier 10052-A Vistas de Zaragoza Cd. Juárez,
                  Chih. 32600 Tel. (656)682-9755
                </p>
              </Grid>
              <Grid
                display="flex"
                alignItems="center"
                alignSelf="baseline"
                justifyContent="center"
                flexDirection="column"
                item
                paddingX="1rem"
                xs={4}
              >
                <img
                  height="100px"
                  style={{ borderRadius: "10%", maxWidt: "150px" }}
                  src={process.env.PUBLIC_URL + "/oficina3.jpg"}
                  alt=""
                />
                <h5>El Paso, Tx.</h5>
                <p style={{ fontSize: 12 }}>
                  1081 Burgundy Dr El Paso, Tx 79907 Tel.(915)791-0001/02/03
                </p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Footer />
      <Notification notify={notify} setNotify={setNotify} />
    </div>
  );
}

export default Contacto;
