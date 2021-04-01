import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/app";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import "./styles/style.css";

ReactDOM.render(
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);
