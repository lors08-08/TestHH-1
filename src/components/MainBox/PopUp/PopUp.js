import React, { useState } from "react";
import styles from "./PopUp.module.css";
import { useDispatch, useSelector } from "react-redux";
import { closePopUp, startLogIn } from "../../../redux/actions";

function PopUp() {
  const dispatch = useDispatch();
  const isAdmin = useSelector((state) => state.users.isAdmin);
  const isLogged = useSelector((state) => state.users.login);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [passLength, setPassLength] = useState(null)
  console.log(isLogged.length);
  const handleChangeLogin = (e) => {
    setLogin(e.target.value);
    setPassLength(null)
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    setPassLength(null)
  };

  const handleLogIn = () => {
    if(login.length && password.length >= 6) {
      dispatch(startLogIn(login, password));
      localStorage.setItem("login", login);
      localStorage.setItem("password", password);
    } else return setPassLength(true)
  };

  return (
    <>
      <div
        onClick={() => {
          dispatch(closePopUp());
        }}
        className={styles.overlay}
      />
      <div className={styles.box}>
        <div
          onClick={() => {
            dispatch(closePopUp());
          }}
          className={styles.closeIcon}
        >
          X
        </div>
        <div className={styles.enterTitle}>
          <h2>вход</h2>
        </div>
        <div className={styles.loginInput}>
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
        {passLength && (<div className={styles.passLength}>Пароль слишком короткий</div>)}
        {(isLogged.length === 0 && isAdmin) && (<div className={styles.passLength}>Неверный логин или пароль</div>)}
        <div className={styles.logIn} onClick={handleLogIn}>
          <button className={styles.logInButton}>ВОЙТИ</button>
        </div>
      </div>
    </>
  );
}

export default PopUp;
