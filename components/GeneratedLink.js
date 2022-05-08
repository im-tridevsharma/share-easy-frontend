import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import QrCode from "react-qr-code";

import styles from "../styles/GeneratedLink.module.css";
import { faPaste, faTimesCircle } from "@fortawesome/free-regular-svg-icons";

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
        <FontAwesomeIcon icon={faPaste} onClick={copy} />
        {copied && <p className={styles.GeneratedLink__link_copied}>Copied!</p>}
        <QrCode value={link} size={100} style={{ marginTop: 20 }} />
      </div>
    </div>
  );
}

export default GeneratedLink;
