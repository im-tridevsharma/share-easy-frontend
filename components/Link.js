import React from "react";

import Toaster from "./Toaster";
import styles from "../styles/Link.module.css";
import { shortenLink } from "../apis/link";
import GeneratedLink from "./GeneratedLink";
import Loader from "./Loader";

function Link() {
  const [error, setError] = React.useState("");
  const [valid, setValid] = React.useState(false);
  const [uploadData, setUploadData] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [isDone, setIsDone] = React.useState(false);
  const [link, setLink] = React.useState("");
  const [message, setMessage] = React.useState("");

  React.useEffect(() => {
    if (uploadData) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [uploadData]);

  const submitData = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formdata = {
      isBurn: false,
      isProtected: false,
      password: "",
      textData: uploadData,
    };

    const res = await shortenLink(formdata);
    if (res?.link) {
      setIsDone(true);
      setIsLoading(false);
      setTimeout(() => {
        setIsDone(false);
        setLink(res?.link);
        setMessage("Congratulations! Your link has been shorten.");
      }, 1000);
    } else {
      setError(res?.message);
      setIsLoading(false);
    }
  };

  return (
    <>
      <Toaster
        text={error}
        type="error"
        active={error !== ""}
        position="bottom-right"
      />
      {(isLoading || isDone) && <Loader loading={isLoading} done={isDone} />}
      {link && (
        <GeneratedLink
          message={message}
          link={link}
          callback={() => {
            setTimeout(() => {
              setLink("");
              setMessage("");
            }, 1000);
            setUploadData("");
          }}
        />
      )}
      <div className={styles.Link}>
        <div className={styles.Link__input}>
          <label>Enter Your Link</label>
          <textarea
            value={uploadData}
            onChange={(e) => setUploadData(e.target.value)}
            autoFocus={true}
            name="link"
            placeholder="Short your link and share it..."
          ></textarea>
        </div>

        <button
          disabled={!valid}
          onClick={submitData}
          className={`${styles.Link__share} ${valid ? styles.active : ""}`}
        >
          Share
        </button>
      </div>
    </>
  );
}

export default Link;
