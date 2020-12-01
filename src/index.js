import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "normalize.css";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger/src";
import logProcedures from "./redux/logProcedures";
import news from "./redux/news";
import "bootstrap/dist/css/bootstrap.min.css"

const rootReducer = combineReducers({
  logProcedures,
  news,
});
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/:id?">
          <App />
        </Route>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
