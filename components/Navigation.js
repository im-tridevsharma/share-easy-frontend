import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import styles from "../styles/Navigation.module.css";

function Navigation() {
  const router = useRouter();

  return (
    <div className={styles.Navigation}>
      <ul className={styles.Navigation__links}>
        <li
          className={`${styles.Navigation__link_item} ${
            router?.asPath === "/about" ? styles.active : ""
          }`}
        >
          <Link href="/about">About Us</Link>
        </li>
        <li
          className={`${styles.Navigation__link_item} ${
            router?.asPath === "/personal" ? styles.active : ""
          }`}
        >
          <Link href="/personal">Personal</Link>
        </li>
        <li className={styles.Navigation__link_item}>
          <Link href="/blogs">Blogs</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
