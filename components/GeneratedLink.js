import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import QrCode from "react-qr-code";

import styles from "../styles/GeneratedLink.module.css";
import { faPaste, faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function GeneratedLink({ message, link, callback = () => {} }) {
  const [copied, setCopied] = React.useState(false);

  const copy = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(link).then(
        function () {
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
          }, 1000);
        },
        function (err) {
          console.error("Async: Could not copy text: ", err);
        }
      );
    }
  };

  return (
    <div className={styles.GeneratedLink}>
      <p className={styles.GeneratedLink__message}>{message}</p>
      <FontAwesomeIcon
        icon={faTimesCircle}
        className={styles.GeneratedLink__close}
        onClick={callback}
      />
      <div className={styles.GeneratedLink__link}>
        {link}
        {copied ? (
          <FontAwesomeIcon icon={faCheck} />
        ) : (
          <FontAwesomeIcon icon={faPaste} onClick={copy} />
        )}
      </div>
      <QrCode value={link} size={100} />
    </div>
  );
}

export default GeneratedLink;
