import Head from "next/head";
import React from "react";
import Header from "../../components/_cms/Header";
import Sidebar from "../../components/_cms/Sidebar";

import styles from "../../styles/_cms/Files.module.css";

function Files() {
  return (
    <div className={styles.Files__wrapper}>
      <Head>
        <title>Files | CMS</title>
      </Head>
      <Sidebar />
      <div className={styles.Files__content}>
        <Header />
        <div className={styles.Files__container}>Files</div>
      </div>
    </div>
  );
}

export default Files;
