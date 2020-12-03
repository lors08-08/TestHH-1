import React from "react";
import styles from "./Body.module.css";
import MainPage from "../MainPage/MainPage";
import { useSelector } from "react-redux";
import NewsFeed from "../NewsPage/NewsFeed";

function Body() {
  const mainPageOpened = useSelector((state) => state.news.mainPageOpened);

  return (
    <div className={styles.box}>
      {mainPageOpened ? <MainPage /> : <NewsFeed />}
    </div>
  );
}

export default Body;
