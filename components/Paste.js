import React from "react";

import Toaster from "./Toaster";
import styles from "../styles/Paste.module.css";
import { shareNote } from "../apis/paste";
import Loader from "./Loader";
import GeneratedLink from "./GeneratedLink";

function Paste() {
  const [uploadData, setUploadData] = React.useState({
    note: "",
    burn: false,
    encryption: false,
    encryption_key: "",
  });
  const [warning, setWarning] = React.useState("");
  const [valid, setValid] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isDone, setIsDone] = React.useState(false);
  const [link, setLink] = React.useState("");
  const [message, setMessage] = React.useState("");

  React.useEffect(() => {
    if (!uploadData?.encryption && uploadData?.note) {
      setValid(true);
    } else if (
      uploadData?.encryption &&
      uploadData?.encryption_key !== "" &&
      uploadData?.note
    ) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [uploadData]);

  const submitData = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formdata = {
      isBurn: uploadData?.burn,
      isProtected: uploadData?.encryption,
      password: uploadData?.encryption_key,
      textData: uploadData?.note,
    };

    const res = await shareNote(formdata);
    if (res?.link) {
      setIsDone(true);
      setIsLoading(false);
      setTimeout(() => {
        setIsDone(false);
        setLink(res?.link);
        setMessage("Congratulations! You have successfully saved your notes.");
      }, 1000);
    } else {
      setWarning(res?.message);
      setIsLoading(false);
    }
  };

  return (
    <>
      <Toaster text={warning} active={warning !== ""} callback={setWarning} />
      {(isLoading || isDone) && <Loader loading={isLoading} done={isDone} />}
      {link && (
        <GeneratedLink
          message={message}
          link={link}
          callback={() => {
            setLink("");
            setMessage("");
            setUploadData({
              note: "",
              burn: false,
              encryption: false,
              encryption_key: "",
            });
          }}
        />
      )}
      <div className={styles.Paste}>
        <div className={styles.Paste__input}>
          <label>Enter Your Note</label>
          <textarea
            autoFocus={true}
            name="note"
            value={uploadData?.note}
            onChange={(e) =>
              setUploadData((prev) => ({ ...prev, note: e.target.value }))
            }
            placeholder="Paste anything and share it..."
          ></textarea>
        </div>

        <label className={styles.Paste__option}>
          <input
            type="checkbox"
            onChange={(e) =>
              setUploadData((prev) => ({ ...prev, burn: e.target.checked }))
            }
            hidden
            id="burn"
          />
          <label className={styles.Paste__option_check} htmlFor="burn"></label>
          Burn after download
        </label>

        <label className={styles.Paste__option}>
          <input
            type="checkbox"
            onChange={(e) =>
              setUploadData((prev) => ({
                ...prev,
                encryption: e.target.checked,
              }))
            }
            hidden
            id="encrypt"
          />
          <label
            className={styles.Paste__option_check}
            htmlFor="encrypt"
          ></label>
          Encrypted Share
        </label>

        {uploadData?.encryption && (
          <div className={styles.Paste__input}>
            <label>Your encryption key</label>
            <input
              type="text"
              value={uploadData?.encryption_key}
              onChange={(e) =>
                setUploadData((prev) => ({
                  ...prev,
                  encryption_key: e.target.value,
                }))
              }
              autoFocus={true}
              name="encryption_key"
            />
          </div>
        )}

        <button
          disabled={!valid}
          onClick={submitData}
          className={`${styles.Paste__share} ${valid ? styles.active : ""}`}
        >
          Share
        </button>
      </div>
    </>
  );
}

export default Paste;
