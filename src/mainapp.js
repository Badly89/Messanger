import React from "react";
import { Provider } from "react-redux";
import { Routes } from "./components/routes";
import { store, persistor } from "./store";
export const MainApp = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);
