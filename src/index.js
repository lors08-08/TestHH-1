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
import application from "./redux/users";
import logProcedures from "./redux/logProcedures";
import users from "./redux/users";
import "bootstrap/dist/css/bootstrap.min.css"
import news from "./redux/news";


const rootReducer = combineReducers({
  application,
  logProcedures,
  users,
  news
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
