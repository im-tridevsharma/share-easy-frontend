import Link from "next/link";
import React from "react";

import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <div className={styles.Footer__links}>
      <div className={styles.Footer__links_sec}>
        <h2>Services</h2>
        <ul>
          <li>
            <Link href="/?_s=file&utm_s=fbl">
              <a>Files Sharing</a>
            </Link>
          </li>
          <li>
            <Link href="/?_s=link&utm_s=fbl">
              <a>Link Shorten</a>
            </Link>
          </li>
          <li>
            <Link href="/?_s=note&utm_s=fbl">
              <a>Notes Sharing</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.Footer__links_sec}>
        <h2>Terms</h2>
        <ul>
          <li>
            <Link href="/privacy-and-policy">
              <a>Privacy and policy</a>
            </Link>
          </li>
          <li>
            <Link href="/terms-and-conditions">
              <a>Terms and conditions</a>
            </Link>
          </li>
          <li>
            <Link href="/advertise">
              <a>Advertise</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.Footer__links_sec}>
        <h2>Links</h2>
        <ul>
          <li>
            <Link href="/about">
              <a>About Us</a>
            </Link>
          </li>
          <li>
            <Link href="/personal">
              <a>Personal</a>
            </Link>
          </li>
          <li>
            <Link href="https://blog.shareeasy.in">
              <a>Blogs</a>
            </Link>
          </li>
        </ul>
      </div>

      <div className={styles.Footer__links_credit}>
        <p>&copy; Copyright 2022 - All rights are reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
