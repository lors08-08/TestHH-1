import React from 'react';
import styles from "./MainPage.module.css";
import {useSelector} from "react-redux";

function MainPage(props) {
  const isAdmin = useSelector((state) => state.users.isAdmin)
  const userName = useSelector((state) => state.users.login)
  return (
    <div className={styles.greetingBox}>
      <div className={styles.greetingTitle}>
        {isAdmin ? `Привет, ${userName}` : "Привет, Гость"}
      </div>
      <div className={styles.greetingContent}>
        Добро пожаловать на наш сайт!
      </div>
    </div>
  );
}

export default MainPage;