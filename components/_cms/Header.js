import React from "react";

import styles from "../../styles/_cms/component/Header.module.css";
import logo from "../../public/logo.png";
import profile from "../../public/profile.jpg";
import Image from "next/image";

function Header() {
  return (
    <div className={styles.Header__container}>
      <div className={styles.Header__logo}>
        <Image src={logo?.src} alt="share-easy" width="60" height="60" />
      </div>
      <div className={styles.Header__profile}>
        <Image src={profile?.src} alt="profile" width="50" height="50" />
      </div>
    </div>
  );
}

export default Header;
