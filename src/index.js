/*
Importare il provider nel nostro componente root che dovrà wrappare il componente radice 
e ricevere come prop lo store sul quale si vuole agire 
*/
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import store from "./store/index";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
