import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCirclePlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { bytesToSize } from "../utils/_helper_functions";

import styles from "../styles/UploadFile.module.css";
import Toaster from "./Toaster";
import Loader from "./Loader";
import { shareFile } from "../apis/file";
import GeneratedLink from "./GeneratedLink";

function UploadFile() {
  const [uploadData, setUploadData] = React.useState({
    files: [],
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
  const [progress, setProgress] = React.useState(0);

  const handleFileSelect = (e) => {
    const { files } = e.target;
    if (files && files[0].size / 1000000 < 200) {
      Object.keys(files).map((index) =>
        setUploadData((prev) => ({
          ...prev,
          files: [...prev?.files, files[index]],
        }))
      );
    } else {
      setWarning("Please select file below 200MB.");
    }
  };

  const handleRemove = (findex) => {
    setUploadData((prev) => ({
      ...prev,
      files: uploadData?.files?.filter((_, index) => index !== findex),
    }));
  };

  React.useEffect(() => {
    if (!uploadData?.encryption && uploadData?.files.length > 0) {
      setValid(true);
    } else if (
      uploadData?.encryption &&
      uploadData?.encryption_key !== "" &&
      uploadData?.files.length > 0
    ) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [uploadData]);

  const submitData = async (e) => {
    setIsLoading(true);

    const formdata = new FormData();
    formdata.append("file", uploadData?.files[0]);
    formdata.append("isBurn", uploadData?.burn);
    formdata.append("isProtected", uploadData?.encryption);
    formdata.append("password", uploadData?.encryption_key);

    const res = await shareFile(formdata, setProgress);
    if (res?.link) {
      setIsDone(true);
      setIsLoading(false);
      setTimeout(() => {
        setIsDone(false);
        setLink(res?.link);
        setMessage(
          "Congratulations! You have successfully uploaded your file."
        );
      }, 1000);
      setProgress(0);
    } else {
      setWarning(res?.message);
      setIsLoading(false);
      setProgress(0);
    }
  };

  return (
    <>
      <Toaster text={warning} active={warning !== ""} callback={setWarning} />
      {(isLoading || isDone) && (
        <Loader progress={progress} loading={isLoading} done={isDone} />
      )}
      {link && (
        <GeneratedLink
          message={message}
          link={link}
          callback={() => {
            setLink("");
            setMessage("");
            setUploadData({
              files: [],
              burn: false,
              encryption: false,
              encryption_key: "",
            });
          }}
        />
      )}
      <div className={styles.UploadFile}>
        {uploadData?.files.length < 1 ? (
          <div className={styles?.UploadFile__con}>
            <label className={styles.UploadFile__plus}>
              <span className={styles.UploadFile__plus_icon}>
                <FontAwesomeIcon icon={faFileCirclePlus} />
              </span>
              <input
                type="file"
                onChange={handleFileSelect}
                hidden
                name="files[]"
              />
              <p>Upload File</p>
            </label>
            <i className={styles.UploadFile__limit}>
              Max size allowed of 200mb
            </i>
          </div>
        ) : (
          <ul className={styles.UploadFile__list}>
            {uploadData?.files.map((file, index) => (
              <li key={index}>
                <span>{file?.name}</span>
                <span>
                  {bytesToSize(file?.size)} . {file?.name?.split(".")[1] || ""}
                </span>
                <FontAwesomeIcon
                  onClick={() => handleRemove(index)}
                  icon={faTimes}
                  className={styles.UploadFile__list_icon}
                />
              </li>
            ))}
          </ul>
        )}
        <div className={styles.UploadFile__con}>
          <label className={styles.UploadFile__option}>
            <input
              type="checkbox"
              onChange={(e) =>
                setUploadData((prev) => ({ ...prev, burn: e.target.checked }))
              }
              hidden
              id="burn"
            />
            <label
              className={styles.UploadFile__option_check}
              htmlFor="burn"
            ></label>
            Burn after download
          </label>

          <label className={styles.UploadFile__option}>
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
              className={styles.UploadFile__option_check}
              htmlFor="encrypt"
            ></label>
            Encrypted Share
          </label>
          {uploadData?.encryption && (
            <div className={styles.UploadFile__input}>
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
            className={`${styles.Upload__share} ${valid ? styles.active : ""}`}
          >
            Share
          </button>
        </div>
      </div>
    </>
  );
}

export default UploadFile;
