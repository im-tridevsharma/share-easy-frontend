import React from "react";

import styles from "../styles/Toaster.module.css";

function Toaster({ type, text, position, active }) {
  const [state, setState] = React.useState(false);
  React.useEffect(() => {
    setState(active);

    setTimeout(() => {
      setState(false);
    }, 5000);
  }, [active]);

  return (
    <div
      className={`${styles.Toaster} ${
        position === "top-right"
          ? styles.Toaster__right_top
          : position === "bottom-right"
          ? styles.Toaster__right_bottom
          : position === "top-left"
          ? styles.Toaster__left_top
          : styles.Toaster__left_bottom
      } ${
        type === "warning"
          ? styles.Toaster__warning
          : type === "error"
          ? styles.Toaster__error
          : styles.Toaster__success
      } ${state ? styles.active : ""}`}
    >
      {text}
    </div>
  );
}

export default Toaster;
