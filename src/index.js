import React, {StrictMode} from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { SnackbarProvider } from "notistack";

ReactDOM.render(
  <StrictMode>
    <SnackbarProvider maxSnack={1}>
      <App />
    </SnackbarProvider>
  </StrictMode>,
  document.getElementById("root")
);
