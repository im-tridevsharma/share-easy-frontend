import Head from "next/head";
import Link from "next/link";
import React from "react";
import Header from "../../../components/_cms/Header";
import Sidebar from "../../../components/_cms/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";

import styles from "../../../styles/_cms/Pages.module.css";

function Pages() {
  return (
    <div className={styles.Pages__wrapper}>
      <Head>
        <title>Pages | CMS</title>
      </Head>
      <Sidebar />
      <div className={styles.Pages__content}>
        <Header />
        <div className={styles.Pages__container}>
          <div className={styles.Pages__card}>
            <div className={styles.Pages__card_header}>
              <div className=""></div>
              <Link href="/_cms/pages/add">
                <a className={styles.Pages__card_header_action}>
                  <FontAwesomeIcon icon={faPlusSquare} />
                </a>
              </Link>
            </div>
            <div className={styles.Pages__card_body}>
              <table className={styles.Pages__table}>
                <thead>
                  <tr>
                    <th>Page Title</th>
                    <th>Create Date</th>
                    <th>Update Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pages;
