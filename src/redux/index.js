import { applyMiddleware, combineReducers, createStore } from "redux";
import application from "./users";
import logProcedures from "./logProcedures";
import users from "./users";
import news from "./news";
import thunk from "redux-thunk";
import logger from "redux-logger/src";

const rootReducer = combineReducers({
  application,
  logProcedures,
  users,
  news,
});
const index = createStore(rootReducer, applyMiddleware(thunk, logger));

export default index;
