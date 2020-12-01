import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Skeleton from "./components/Skeleton/Skeleton";
import styles from "./components/MainBox/MainBox.module.css"

function App() {
  const dispatch = useDispatch()
  const loadingNews = useSelector((state) => state.news.loading)

  if(loadingNews) {
    return <Skeleton />
  }
  return (
    <div className={styles.outerBox}>
      loaded
    </div>
  );
}

export default App;
