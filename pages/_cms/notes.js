import Head from "next/head";
import React from "react";
import Header from "../../components/_cms/Header";
import Sidebar from "../../components/_cms/Sidebar";

import styles from "../../styles/_cms/Notes.module.css";

function Notes() {
  return (
    <div className={styles.Notes__wrapper}>
      <Head>
        <title>Notes | CMS</title>
      </Head>
      <Sidebar />
      <div className={styles.Notes__content}>
        <Header />
        <div className={styles.Notes__container}>Notes</div>
      </div>
    </div>
  );
}

export default Notes;
