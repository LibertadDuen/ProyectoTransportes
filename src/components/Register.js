import React from "react";
import { AppBar, Toolbar, Grid, TextField, Button } from "@mui/material";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "@firebase/auth";
import { auth } from "../Firebase";

export default function Login() {
  const [regEmail, setRegEmail] = useState("");
  const [regPass, setRegPass] = useState("");
  const [user, setUser] = useState("");
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        regEmail,
        regPass
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <AppBar style={{ backgroundColor: "white" }} position="static">
        <Toolbar style={{ maxHeight: "50px" }}>
          <img
            style={{
              borderRadius: "10%",
              justifyContent: "flex-start",
              alignSelf: "flex-start",
              borderBlock: "groove",
            }}
            height="150px"
            src={process.env.PUBLIC_URL + "/LogoTRASOTO.png"}
            alt=""
          />
          <div style={{ justifyContent: "flex-end", marginLeft: "auto" }}>
            <p style={{ color: "black" }}>{user ? user.email : "-"}</p>
          </div>
        </Toolbar>
      </AppBar>
      <Grid marginTop="4rem" container>
        <Grid item xs={4}></Grid>
        <Grid
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          item
          xs={4}
        >
          <h2>Registrarte</h2>
          <Grid
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            item
          >
            <Grid
              display="flex"
              alignItems="flex-start"
              justifyContent="flex-start"
              flexDirection="column"
            >
              <h4>Correo Electrónico</h4>
              <TextField
                onChange={(e) => {
                  setRegEmail(e.target.value);
                }}
                fullWidth="true"
                size="small"
                variant="outlined"
                name="email"
              />
              <h4>Contraseña</h4>
              <TextField
                fullWidth="true"
                size="small"
                variant="outlined"
                name="pass"
                type="password"
                onChange={(e) => {
                  setRegPass(e.target.value);
                }}
              />
            </Grid>
            <Grid marginTop="2rem">
              <Button variant="contained" onClick={register}>
                Registrar
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
