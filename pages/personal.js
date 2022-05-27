import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Navigation from "../components/Navigation";

import styles from "../styles/Page.module.css";
import app_styles from "../styles/Home.module.css";
import Footer from "../components/Footer";

function Personal() {
  return (
    <div className={styles.Page__container}>
      <Head>
        <title>Personal</title>
      </Head>
      <div className={app_styles.App_navigation}>
        <Link href="/">
          <div className={app_styles.App_logo}>
            <Image src="/logo.png" alt="share easy" width="60" height="60" />
            <h1>SE</h1>
          </div>
        </Link>
        <Navigation />
      </div>
      <div className={styles.Page__main}>
        <div className={styles.Page__main_title}>
          <h1>Personal</h1>
        </div>

        <div className={styles.Page__main_content}>
          <p>
            Personal Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book.
          </p>

          <h3>Coming Soon...</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book.
          </p>

          <p>
            Personal Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
      <div className={styles.Page__footer}>
        <Footer />
      </div>
    </div>
  );
}

export default Personal;
