import Head from "next/head";
import React from "react";
import Header from "../../components/_cms/Header";
import Sidebar from "../../components/_cms/Sidebar";

import styles from "../../styles/_cms/Dashboard.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPager,
  faLinkSlash,
  faNoteSticky,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";

function Dashboard() {
  return (
    <div className={styles.Dashboard__wrapper}>
      <Head>
        <title>Dashboard | CMS</title>
      </Head>
      <Sidebar />
      <div className={styles.Dashboard__content}>
        <Header />
        <div className={styles.Dashboard__container}>
          <div className={styles.Dashboard__stats}>
            <div className={styles.Dashboard__item}>
              <h2>Pages</h2>
              <div className={styles.Dashboard__item_info}>
                <FontAwesomeIcon icon={faPager} width={30} />
                <p>01</p>
              </div>
            </div>

            <div className={styles.Dashboard__item}>
              <h2>Files</h2>
              <div className={styles.Dashboard__item_info}>
                <FontAwesomeIcon icon={faFileAlt} width={30} />
                <p>11</p>
              </div>
            </div>
            <div className={styles.Dashboard__item}>
              <h2>Links</h2>
              <div className={styles.Dashboard__item_info}>
                <FontAwesomeIcon icon={faLinkSlash} width={30} />
                <p>10</p>
              </div>
            </div>
            <div className={styles.Dashboard__item}>
              <h2>Notes</h2>
              <div className={styles.Dashboard__item_info}>
                <FontAwesomeIcon icon={faNoteSticky} width={30} />
                <p>15</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
