import React from "react";
import Link from "next/link";

import styles from "../styles/Navigation.module.css";

function Navigation() {
  return (
    <div className={styles.Navigation}>
      <ul className={styles.Navigation__links}>
        <li className={styles.Navigation__link_item}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.Navigation__link_item}>
          <Link href="/about">About Company</Link>
        </li>
        <li className={styles.Navigation__link_item}>
          <Link href="/personal">Personal</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
