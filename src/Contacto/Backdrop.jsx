import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export default function SimpleBackdrop({ open, handleClose }) {
  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
        style={{flexDirection:'column'}}
      >
        <CircularProgress color="inherit" />
        <div style={{marginTop:'15px'}}>Enviando...</div>
      </Backdrop>
    </div>
  );
}
