import React from "react";
import Head from "next/head";
import Image from "next/image";
import { getFile } from "../apis/common";
import { base_url } from "../utils/_api";

import styles from "../styles/Home.module.css";
import Navigation from "../components/Navigation";
import Downloader from "../components/Downloader";
import { useRouter } from "next/router";
import NoteViewer from "../components/NoteViewer";

import logo from "../public/favicon.png";

function FileHandler({ fileInfo, token }) {
  const router = useRouter();

  React.useEffect(() => {
    if (!fileInfo) {
      router.push("/");
    }
  }, [fileInfo]);

  React.useEffect(() => {
    var ads = document.getElementsByClassName("adsbygoogle").length;
    for (var i = 0; i < ads; i++) {
      try {
        (adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {}
    }
  }, []);

  return (
    <>
      <Head>
        <title>Download Your Files | Share Easy</title>
      </Head>

      <div className={styles.App_logo} onClick={() => router.push("/")}>
        <Image src={logo?.src} alt="share easy" width="60" height="60" />
        <h1>SE</h1>
      </div>

      <div className={styles.App_navigation}>
        <Navigation />
      </div>

      <div className={styles.App_action}>
        {fileInfo?.fileType === "text" ? (
          <NoteViewer fileinfo={fileInfo} />
        ) : (
          <Downloader fileinfo={fileInfo} token={token} />
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
}

export async function getServerSideProps({ query }) {
  try {
    if (query?.id) {
      const res = await getFile(base_url + query?.id);

      if (res?.msg) {
        return {
          redirect: {
            permanent: false,
            destination: "/",
          },
          props: {},
        };
      }

      if (res?.file?.fileType === "url") {
        return {
          redirect: {
            permanent: false,
            destination: res?.file?.fileName || base_url.replace(":8443", ""),
          },
          props: {},
        };
      } else {
        return {
          props: {
            fileInfo: res?.file || null,
            token: res?.token || null,
          },
        };
      }
    }
  } catch (err) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
      props: { fileInfo: "" },
    };
  }
}

export default FileHandler;
