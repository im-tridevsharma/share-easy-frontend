import React from "react";
import Head from "next/head";
import Navigation from "../components/Navigation";
import UploadFile from "../components/UploadFile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileArchive,
  faLink,
  faPaste,
  faQrcode,
} from "@fortawesome/free-solid-svg-icons";

import styles from "../styles/Home.module.css";
import Link from "../components/Link";
import Paste from "../components/Paste";
import QrCode from "../components/QrCode";

const HomePage = () => {
  const [action, setAction] = React.useState("file");

  return (
    <>
      <Head>
        <title>Share Easy</title>
      </Head>

      <div className={styles.App_logo}>
        <h1>SE</h1>
      </div>

      <div className={styles.App_action}>
        {action === "file" && <UploadFile />}
        {action === "link" && <Link />}
        {action === "paste" && <Paste />}
        {action === "qrcode" && <QrCode />}
      </div>

      <div className={styles.App_actions}>
        <p
          onClick={() => setAction("file")}
          className={action === "file" ? styles.active : ""}
        >
          <FontAwesomeIcon icon={faFileArchive} />
        </p>
        <p
          onClick={() => setAction("link")}
          className={action === "link" ? styles.active : ""}
        >
          <FontAwesomeIcon icon={faLink} />
        </p>
        <p
          onClick={() => setAction("paste")}
          className={action === "paste" ? styles.active : ""}
        >
          <FontAwesomeIcon icon={faPaste} />
        </p>
        {false && (
          <p
            onClick={() => setAction("qrcode")}
            className={action === "qrcode" ? styles.active : ""}
          >
            <FontAwesomeIcon icon={faQrcode} />
          </p>
        )}
      </div>

      <div className={styles.App_navigation}>
        <Navigation />
      </div>

      <div className={styles.App_title}>
        <p>Share Easy</p>
      </div>
    </>
  );
};

export default HomePage;
