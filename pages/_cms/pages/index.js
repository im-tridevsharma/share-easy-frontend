import Head from "next/head";
import Link from "next/link";
import React from "react";
import Header from "../../../components/_cms/Header";
import Sidebar from "../../../components/_cms/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

import styles from "../../../styles/_cms/Pages.module.css";
import data from "../../../utils/data.json";

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
            <div className={styles.Pages__card_body}>
              <table className={styles.Pages__table}>
                <thead>
                  <tr>
                    <th>Page Title</th>
                    <th>Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.pages?.map((item, key) => (
                    <tr key={key}>
                      <td>{item?.replace("-", " ").toUpperCase()}</td>
                      <td></td>
                      <td>
                        <Link href={"pages/" + item}>
                          <FontAwesomeIcon
                            icon={faEdit}
                            className={styles.Pages__icon}
                          />
                        </Link>
                      </td>
                    </tr>
                  ))}
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
