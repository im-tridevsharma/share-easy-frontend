import Head from "next/head";
import React from "react";
import Header from "../../components/_cms/Header";
import Sidebar from "../../components/_cms/Sidebar";

import styles from "../../styles/_cms/Blogs.module.css";

function Blogs() {
  return (
    <div className={styles.Blogs__wrapper}>
      <Head>
        <title>Blogs | CMS</title>
      </Head>
      <Sidebar />
      <div className={styles.Blogs__content}>
        <Header />
        <div className={styles.Blogs__container}>Blogs</div>
      </div>
    </div>
  );
}

export default Blogs;
