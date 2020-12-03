import {applyMiddleware, combineReducers, createStore} from "redux";
import application from "../redux/users";
import logProcedures from "../redux/logProcedures";
import users from "../redux/users";
import news from "../redux/news";
import thunk from "redux-thunk";
import logger from "redux-logger/src";

const rootReducer = combineReducers({
  application,
  logProcedures,
  users,
  news
});
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store