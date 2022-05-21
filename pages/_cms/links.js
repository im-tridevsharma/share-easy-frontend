import Head from "next/head";
import React from "react";
import Header from "../../components/_cms/Header";
import Sidebar from "../../components/_cms/Sidebar";

import styles from "../../styles/_cms/Links.module.css";

function Links() {
  return (
    <div className={styles.Links__wrapper}>
      <Head>
        <title>Links | CMS</title>
      </Head>
      <Sidebar />
      <div className={styles.Links__content}>
        <Header />
        <div className={styles.Links__container}>Links</div>
      </div>
    </div>
  );
}

export default Links;
