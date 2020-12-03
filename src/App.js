import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from "./components/Skeleton/Skeleton";
import styles from "./App.module.css";
import Header from "./components/MainBox/Header/Header";
import Body from "./components/MainBox/Body/Body";
import { loadNews } from "./redux/actions";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const loadingNews = useSelector((state) => state.news.loading);

  useEffect(() => {
    dispatch(loadNews());
  }, [dispatch]);

  if (loadingNews) {
    return <Skeleton />;
  }

  return (
    <Router>
      <div className={styles.box}>
        <Header />
        <Body />
      </div>
    </Router>
  );
}

export default App;
