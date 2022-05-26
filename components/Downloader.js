import React from "react";
import { downloadFile, checkPassword } from "../apis/common";

import styles from "../styles/Downloader.module.css";
import Loader from "./Loader";
import Toaster from "./Toaster";

function Downloader({ token, fileinfo }) {
  const [warning, setWarning] = React.useState("");
  const [valid, setValid] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [isDone, setIsDone] = React.useState(false);
  const [progress, setProgress] = React.useState(0);

  React.useState(() => {
    if (!fileinfo?.isProtected) {
      setValid(true);
    }
  }, []);

  const handleDownload = async () => {
    setIsLoading(true);
    if (fileinfo?.isProtected) {
      const res = await checkPassword({ fileId: fileinfo?.fileId, password });
      if (res?.msg) {
        setWarning(res?.msg);
        setTimeout(() => {
          setWarning("");
        }, 1000);
      } else if (res?.token) {
        const download = await downloadFile(res?.token, setProgress);
        const path = window.URL.createObjectURL(new Blob([download]));
        const link = document.createElement("a");
        link.href = path;
        link.setAttribute("download", fileinfo?.fileName);
        document.body.appendChild(link);
        link.click();
      }

      setIsDone(true);
      setIsLoading(false);

      setTimeout(() => {
        setIsDone(false);
      }, 1000);
    } else {
      const res = await downloadFile(token);

      const path = window.URL.createObjectURL(new Blob([res]));
      const link = document.createElement("a");
      link.href = path;
      link.setAttribute("download", fileinfo?.fileName);
      document.body.appendChild(link);
      link.click();

      setIsDone(true);
      setIsLoading(false);

      setTimeout(() => {
        setIsDone(false);
      }, 1000);
    }
  };

  return (
    <div className={styles.Downloader}>
      <Toaster
        text={warning}
        type="error"
        active={warning !== ""}
        position="bottom-right"
      />
      {(isLoading || isDone) && (
        <Loader progress={progress} loading={isLoading} done={isDone} />
      )}

      <h2>Download Your File</h2>
      <p>{fileinfo?.fileName}</p>

      {fileinfo?.isProtected && (
        <div className={styles.Downloader__input}>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (e.target.value?.length > 0) {
                setValid(true);
              } else {
                setValid(false);
              }
            }}
            autoFocus={true}
          />
          <span>File is password protected.</span>
        </div>
      )}

      <button
        disabled={!valid}
        onClick={handleDownload}
        className={`${styles.Downloader__btn} ${valid ? styles.active : ""}`}
      >
        Download
      </button>
    </div>
  );
}

export default Downloader;
