import Head from "next/head";
import React from "react";
import Header from "../../components/_cms/Header";
import Sidebar from "../../components/_cms/Sidebar";

import styles from "../../styles/_cms/Dashboard.module.css";

function Dashboard() {
  return (
    <div className={styles.Dashboard__wrapper}>
      <Head>
        <title>Dashboard | CMS</title>
      </Head>
      <Sidebar />
      <div className={styles.Dashboard__content}>
        <Header />
        <div className={styles.Dashboard__container}>Dashboard</div>
      </div>
    </div>
  );
}

export default Dashboard;
