import React from "react";

import Toaster from "./Toaster";
import styles from "../styles/QrCode.module.css";

function QrCode() {
  const [error, setError] = React.useState("");
  const [valid, setValid] = React.useState(false);
  const [uploadData, setUploadData] = React.useState("");

  React.useEffect(() => {
    if (uploadData) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [uploadData]);

  const submitData = async (e) => {
    e.preventDefault();
    console.log(uploadData);
  };

  return (
    <>
      <Toaster
        text={error}
        type="error"
        active={error !== ""}
        position="bottom-right"
      />

      <div className={styles.QrCode}>
        <div className={styles.QrCode__input}>
          <label>Enter Link</label>
          <input
            type="text"
            value={uploadData}
            onChange={(e) => setUploadData(e.target.value)}
            autoFocus={true}
            name="link"
          />
        </div>

        <button
          disabled={!valid}
          className={`${styles.QrCode__share} ${valid ? styles.active : ""}`}
        >
          Generate QR
        </button>
      </div>
    </>
  );
}

export default QrCode;
