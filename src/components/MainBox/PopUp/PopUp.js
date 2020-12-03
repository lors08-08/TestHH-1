import React, { useState } from "react";
import styles from "./PopUp.module.css";
import { useDispatch, useSelector } from "react-redux";
import { startLogIn } from "../../../redux/actions";

function PopUp({ open, onClose }) {
  const dispatch = useDispatch();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const userLogin = useSelector((state) => state.users.login);
  const error = useSelector((state) => state.users.error);

  const handleChangeLogin = (e) => {
    setLogin(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogIn = () => {
    if (login.length && password.length) {
      dispatch(startLogIn(login, password));
      setLogin("");
      setPassword("");
    }
  };

  if (!open) {
    return null;
  }

  if (userLogin) {
    onClose();
  }

  const handleClose = () => {
    setLogin("");
    setPassword("");
    onClose();
  };

  return (
    <>
      <div onClick={handleClose} className={styles.overlay} />
      <div className={styles.box}>
        <div onClick={handleClose} className={styles.closeIcon}>
          X
        </div>
        <div>
          <h2>вход</h2>
        </div>
        <div className={styles.loginInput}>
          {error ? (
            <div className={styles.errorMessage}>неверный пароль или логин</div>
          ) : (
            ""
          )}
          <input
            type="text"
            placeholder={"ведите логин"}
            value={login}
            onChange={handleChangeLogin}
          />
        </div>
        <div className={styles.passwordInput}>
          <input
            type="password"
            placeholder={"ведите пароль"}
            value={password}
            onChange={handleChangePassword}
          />
        </div>
        <div className={styles.logIn}>
          <button onClick={handleLogIn}>ВОЙТИ</button>
        </div>
      </div>
    </>
  );
}

export default PopUp;
