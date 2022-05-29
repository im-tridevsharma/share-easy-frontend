import React from "react";

import styles from "../styles/Toaster.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

function Toaster({ text, active, callback }) {
  const [state, setState] = React.useState(false);
  React.useEffect(() => {
    setState(active);

    setTimeout(() => {
      setState(false);
      callback && callback("");
    }, 2000);
  }, [active]);

  return (
    <div className={`${styles.Toaster} ${state ? styles.active : ""}`}>
      <FontAwesomeIcon icon={faCircleXmark} /> {text}
    </div>
  );
}

export default Toaster;
