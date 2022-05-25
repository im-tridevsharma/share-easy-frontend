import React, { useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/_cms/component/Header.module.css";
import logo from "../../public/logo.png";
import profile from "../../public/profile.jpg";
import Image from "next/image";

function Header() {
  const router = useRouter();
  const [title, setTitle] = React.useState("");

  useEffect(() => {
    setTitle(router.asPath.split("/").reverse()[0]?.toUpperCase());
  }, []);

  return (
    <div className={styles.Header__container}>
      <div className={styles.Header__logo}>
        <Image
          src={logo?.src}
          className={styles.Header__logo_img}
          alt="share-easy"
          width="60"
          height="60"
        />
        <h2>{title}</h2>
      </div>
      <div className={styles.Header__profile}>
        <Image
          src={profile?.src}
          className={styles.Header__logo_img}
          alt="profile"
          width="50"
          height="50"
        />
      </div>
    </div>
  );
}

export default Header;
