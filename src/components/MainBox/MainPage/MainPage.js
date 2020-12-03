import React, { useEffect } from "react";
import styles from "./MainPage.module.css";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function MainPage(props) {
  const isAdmin = useSelector((state) => state.users.isAdmin);
  const userName = useSelector((state) => state.users.login);
  const history = useHistory();

  useEffect(() => {
    history.push("Main");
  }, [history]);

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
