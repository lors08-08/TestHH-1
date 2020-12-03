import React, { useState } from "react";
import styles from "./Header.module.css";
import PopUp from "../PopUp/PopUp";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteLogPass } from "../../../redux/actions";

function Header() {
  const dispatch = useDispatch();
  const [modalVisibility, setModalVisibility] = useState(false);
  const isAdmin = useSelector((state) => state.users.isAdmin);
  const myId = useSelector((state) => state.users.id);

  const handleLogout = () => {
    dispatch(deleteLogPass());
    localStorage.removeItem("auth");
  };

  return (
    <>
      <div className={styles.box}>
        <div className={styles.newsAndMain}>
          <div>
            <NavLink activeClassName={styles.clicked} to="/" exact>
              Главная
            </NavLink>
          </div>
          <div>
            <NavLink activeClassName={styles.clicked} to="/news">
              Новости
            </NavLink>
          </div>
        </div>
        <div
          onClick={() => setModalVisibility(true)}
          className={styles.logInText}
        >
          {myId !== undefined ? (
            <span onClick={handleLogout}>Выход</span>
          ) : (
            "Вход"
          )}
        </div>
      </div>
      <PopUp open={modalVisibility} onClose={() => setModalVisibility(false)} />
    </>
  );
}

export default Header;
