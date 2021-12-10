import React from "react";
import { AppBar, Toolbar, Grid } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import { signOut } from "@firebase/auth";
import { auth } from "../../Firebase";
import { onAuthStateChanged } from "@firebase/auth";
import { useState } from "react";
import { fontSize } from "@mui/system";

const NavBar = () => {
  const navigate = useNavigate();
  const logout = async () => {
    await signOut(auth);
  };
  const [user, setUser] = useState("");
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  return (
    <div>
      <div>
        <p style={{ color: "black", fontSize: 10 }}>
          {user ? user.email : "-"}
        </p>
      </div>
      <AppBar position="static">
        <Toolbar style={{ maxHeight: "50px" }}>
          <img
            style={{
              borderRadius: "10%",
              justifyContent: "flex-start",
              alignSelf: "flex-start",
            }}
            height="150px"
            src={process.env.PUBLIC_URL + "/LogoTRASOTO.png"}
            alt=""
            onClick={() => {
              navigate("/");
            }}
          />
          <div
            style={{
              justifyContent: "flex-end",
              marginLeft: "auto",
              display: "inline-flex",
            }}
          >
            <Link style={{ marginRight: "1rem", color: "white" }} to="/">
              Inicio
            </Link>
            <Link style={{ marginRight: "1rem", color: "white" }} to="/">
              Nosotros
            </Link>
            <Link style={{ marginRight: "1rem", color: "white" }} to="/">
              Servicios
            </Link>
            <Link
              style={{ marginRight: "1rem", color: "white" }}
              to="/vacantes"
            >
              Vacantes
            </Link>
            <Link
              style={{ marginRight: "1rem", color: "white" }}
              to="/contacto"
            >
              Contacto
            </Link>
            <Grid></Grid>
            <Link
              style={{ marginRight: "1rem", color: "white" }}
              to="/login"
              onClick={logout}
            >
              Logout
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default NavBar;
