import React from "react";
import { getNotes } from "../apis/common";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";

import styles from "../styles/NoteViewer.module.css";
import Loader from "./Loader";
import Toaster from "./Toaster";

function NoteViewer({ fileinfo }) {
  const [warning, setWarning] = React.useState("");
  const [valid, setValid] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [isDone, setIsDone] = React.useState(false);
  const [data, setData] = React.useState("");

  React.useState(() => {
    if (!fileinfo?.isProtected) {
      setValid(true);
    }
  }, []);

  const handleViewer = async () => {
    setIsLoading(true);
    if (fileinfo?.isProtected) {
      const res = await getNotes({ fileId: fileinfo?.fileId, password });
      if (!res?.data && res?.msg) {
        setWarning(res?.msg);
        setTimeout(() => {
          setWarning("");
        }, 1000);
      } else {
        setData(res?.data);
      }
      setIsDone(true);
      setIsLoading(false);
      setTimeout(() => {
        setIsDone(false);
      }, 1000);
    } else {
      const res = await getNotes({ fileId: fileinfo?.fileId, password: "" });
      setData(res?.data);
      setIsDone(true);
      setIsLoading(false);
      setTimeout(() => {
        setIsDone(false);
      }, 3000);
    }
  };

  return (
    <div className={styles.NoteViewer}>
      <Toaster
        text={warning}
        type="error"
        active={warning !== ""}
        position="bottom-left"
      />
      {(isLoading || isDone) && <Loader loading={isLoading} done={isDone} />}

      <h2>View Notes</h2>

      {fileinfo?.isProtected && (
        <div className={styles.NoteViewer__input}>
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
          <span>Note is password protected.</span>
        </div>
      )}

      <button
        disabled={!valid}
        onClick={handleViewer}
        className={`${styles.NoteViewer__btn} ${valid ? styles.active : ""}`}
      >
        View
      </button>

      {data && (
        <div className={styles.NoteViewer__viewbox}>
          <div>{data}</div>
          <FontAwesomeIcon
            icon={faTimesCircle}
            className={styles.NoteViewer__close}
            onClick={() => setData("")}
          />
        </div>
      )}
    </div>
  );
}

export default NoteViewer;
