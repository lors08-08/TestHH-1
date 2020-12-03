import React from "react";
import styles from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { openMainPage, openNews, openPopUp } from "../../../redux/actions";
import PopUp from "../PopUp/PopUp";

function Header() {
  const dispatch = useDispatch();
  const mainPageOpened = useSelector((state) => state.news.mainPageOpened);
  const mainNewsFeedOpened = useSelector((state) => state.news.newsFeedOpened);
  const popUpOpened = useSelector((state) => state.news.popUpOpened);

  return (
    <>
      <div className={styles.box}>
        <div className={styles.newsandMain}>
          {mainPageOpened ? (
            <div style={{ color: "#5296ff" }}>Главная</div>
          ) : (
            <div
              onClick={() => {
                dispatch(openMainPage());
              }}
            >
              Главная
            </div>
          )}
          {mainNewsFeedOpened ? (
            <div style={{ color: "#5296ff" }}>Новости</div>
          ) : (
            <div
              onClick={() => {
                dispatch(openNews());
              }}
            >
              Новости
            </div>
          )}
        </div>
        {popUpOpened ? (
          <div className={styles.logInTextOpened}>Вход</div>
        ) : (
          <div
            onClick={() => {
              dispatch(openPopUp());
            }}
            className={styles.logInText}
          >
            Вход
          </div>
        )}
      </div>
      {popUpOpened && <PopUp />}
    </>
  );
}

export default Header;
