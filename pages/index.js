import React from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Navigation from "../components/Navigation";
import UploadFile from "../components/UploadFile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileArchive,
  faLink,
  faPaste,
  faQrcode,
  faRecordVinyl,
} from "@fortawesome/free-solid-svg-icons";

import styles from "../styles/Home.module.css";
import Link from "../components/Link";
import Paste from "../components/Paste";
import QrCode from "../components/QrCode";

const HomePage = (props) => {
  const [action, setAction] = React.useState("file");
  const router = useRouter();

  React.useEffect(() => {
    var ads = document.getElementsByClassName("adsbygoogle").length;
    for (var i = 0; i < ads; i++) {
      try {
        (adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {}
    }

    setAction(props?.action || "file");
  }, []);

  return (
    <>
      <Head>
        <title>Share Easy</title>
      </Head>

      <div className={styles.App_logo}>
        <Image src="/logo.png" alt="share easy" width="60" height="60" />
        <h1>SE</h1>
      </div>

      <div className={styles.App_navigation}>
        <Navigation />
      </div>

      <div className={styles.App_action}>
        {action === "file" && <UploadFile />}
        {action === "link" && <Link />}
        {action === "note" && <Paste />}
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
          onClick={() => setAction("note")}
          className={action === "note" ? styles.active : ""}
        >
          <FontAwesomeIcon icon={faPaste} />
        </p>
        <p onClick={() => router.push("/recording")}>
          <FontAwesomeIcon icon={faRecordVinyl} />
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

      <div className={styles.App_ads}>
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-4888538539035804"
          data-ad-slot="4356688961"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>

      <div className={styles.App_title}>
        <p>Share Easy</p>
      </div>
    </>
  );
};

HomePage.getInitialProps = async (ctx) => {
  return {
    action: ctx?.query?._s,
  };
};

export default HomePage;
