import React from 'react';
import styles from "./Skeleton.module.css";
import Spinner from "react-bootstrap/Spinner";


function Skeleton() {
  return (
    <div className={styles.box}>
      <div className={styles.spinner}>
        <Spinner animation="border" role="status" variant="secondary">
          <span className="sr-only">Loading...</span>
        </Spinner>
        <div>Пожалуйста, подождите идет загрузка</div>
      </div>
    </div>
  );
}

export default Skeleton;