import React from 'react';
import styles from "./Body.module.css"
import MainPage from "../MainPage/MainPage";
import {useSelector} from "react-redux";
import NewsFeed from "../NewsPage/NewsFeed";
import PopUp from "../PopUp/PopUp";

function Body() {
  const mainPageOpened = useSelector((state) => state.news.mainPageOpened)
  const popUpOpened = useSelector((state) => state.news.popUpOpened)

  return (
    <div className={styles.box}>
      {mainPageOpened ? <MainPage /> : <NewsFeed />}
      {popUpOpened && <PopUp />}
    </div>
  );
}

export default Body;