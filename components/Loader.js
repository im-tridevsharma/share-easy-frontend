import React from "react";

import styles from "../styles/Loader.module.css";

function Loader({ loading, done }) {
  return (
    <div className={styles.Loader}>
      <div
        className={`${styles.Loader__box} ${
          loading && !done ? styles.active : ""
        } ${done && !loading ? styles.done : ""}`}
      ></div>
    </div>
  );
}

export default Loader;
