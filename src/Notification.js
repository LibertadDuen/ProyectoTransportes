import React from "react";

import { Snackbar } from "@mui/material";
import { Alert } from "@mui/material";

const Notification = (props) => {
  const { notify, setNotify } = props;

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setNotify({
      ...notify,
      isOpen: false,
    });
  };

  return (
    <Snackbar
      style={{ marginTop: "3rem", marginLeft: "-0.5rem" }}
      open={notify.isOpen}
      autoHideDuration={2500}
      anchorOrigin={{ vertical: "top", horizontal: "left" }}
      onClose={handleClose}
    >
      <Alert severity={notify.type}>{notify.message}</Alert>
    </Snackbar>
  );
};

export default Notification;
