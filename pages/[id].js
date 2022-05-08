import React from "react";
import Head from "next/head";
import { getFile } from "../apis/common";
import { base_url } from "../utils/_api";

import styles from "../styles/Home.module.css";
import Navigation from "../components/Navigation";
import Downloader from "../components/Downloader";
import { useRouter } from "next/router";
import NoteViewer from "../components/NoteViewer";

function FileHandler({ fileInfo, token }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Download Your Files | Share Easy</title>
      </Head>

      <div className={styles.App_logo} onClick={() => router.push("/")}>
        <h1>SE</h1>
      </div>

      <div className={styles.App_action}>
        {fileInfo?.fileType === "text" ? (
          <NoteViewer fileinfo={fileInfo} />
        ) : (
          <Downloader fileinfo={fileInfo} token={token} />
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
}

export async function getServerSideProps({ query }) {
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
          destination: res?.file?.fileName,
        },
        props: {},
      };
    } else {
      return {
        props: {
          fileInfo: res?.file,
          token: res?.token || "",
        },
      };
    }
  } else {
    return {
      props: {},
    };
  }
}

export default FileHandler;
