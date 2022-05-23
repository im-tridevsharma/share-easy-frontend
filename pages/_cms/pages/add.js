import Head from "next/head";
import React from "react";
import Header from "../../../components/_cms/Header";
import Sidebar from "../../../components/_cms/Sidebar";

import styles from "../../../styles/_cms/Pages.module.css";

function AddPages() {
  return (
    <div className={styles.Pages__wrapper}>
      <Head>
        <title>Add Pages | CMS</title>
      </Head>
      <Sidebar />
      <div className={styles.Pages__content}>
        <Header />
        <div className={styles.Pages__container}>Pages</div>
      </div>
    </div>
  );
}

export default AddPages;
