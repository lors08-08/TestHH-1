import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "normalize.css";
import App from "./App";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import index from "./store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={index}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
