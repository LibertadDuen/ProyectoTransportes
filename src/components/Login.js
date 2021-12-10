import React from "react";
import { AppBar, Toolbar, Grid, TextField, Button } from "@mui/material";
import { useState } from "react";
import { auth } from "../Firebase";
import { signInWithEmailAndPassword, onAuthStateChanged } from "@firebase/auth";
import { useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPass
      );
    } catch (error) {
      console.log(error);
    }
    navigate("/");
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
          <h2>Iniciar Sesión</h2>
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
                  setLoginEmail(e.target.value);
                }}
                fullWidth="true"
                size="small"
                variant="outlined"
                name="email"
              />
              <h4>Contraseña</h4>
              <TextField
                onChange={(e) => {
                  setLoginPass(e.target.value);
                }}
                fullWidth="true"
                size="small"
                variant="outlined"
                name="pass"
                type="password"
              />
            </Grid>
            <Grid marginTop="2rem">
              <Button variant="contained" onClick={login}>
                Iniciar Sesión
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
