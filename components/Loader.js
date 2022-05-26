import React from "react";

import styles from "../styles/Loader.module.css";

function Loader({ loading, done, progress }) {
  return (
    <div className={styles.Loader}>
      <div
        className={`${styles.Loader__box} ${
          loading && !done ? styles.active : ""
        } ${done && !loading ? styles.done : ""}`}
      >
        {progress > 0 && (
          <span className={styles.Loader__progress}>{progress}</span>
        )}
      </div>
    </div>
  );
}

export default Loader;
