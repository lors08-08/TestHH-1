import React from "react";
import styles from "./Body.module.css";
import MainPage from "../MainPage/MainPage";
import NewsFeed from "../NewsPage/NewsFeed";
import { Redirect, Route, Switch } from "react-router-dom";

function Body() {
  return (
    <div className={styles.box}>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/news">
          <NewsFeed />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default Body;
