import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "../../styles/_cms/component/Sidebar.module.css";
import logo from "../../public/logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDharmachakra,
  faPager,
  faBlog,
  faLinkSlash,
  faNoteSticky,
} from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";

function Sidebar() {
  const router = useRouter();
  console.log(router.asPath);
  return (
    <div className={styles.Sidebar__container}>
      <div className={styles.Sidebar__header}>
        <img src={logo?.src} alt="share-easy" />
        <h2>
          Share
          <br /> Easy
        </h2>
      </div>
      <ul className={styles.Sidebar__nav}>
        <li>
          <Link href="/_cms/dashboard">
            <a
              className={
                router?.asPath === "/_cms/dashboard" ? styles.active : ""
              }
            >
              <FontAwesomeIcon
                icon={faDharmachakra}
                className={styles.Sidebar__nav_icon}
              />
              Dashboard
            </a>
          </Link>
        </li>
        <li>
          <Link href="/_cms/pages">
            <a
              className={router?.asPath === "/_cms/pages" ? styles.active : ""}
            >
              <FontAwesomeIcon
                icon={faPager}
                className={styles.Sidebar__nav_icon}
              />
              Pages
            </a>
          </Link>
        </li>
        <li>
          <Link href="/_cms/blogs">
            <a
              className={router?.asPath === "/_cms/blogs" ? styles.active : ""}
            >
              <FontAwesomeIcon
                icon={faBlog}
                className={styles.Sidebar__nav_icon}
              />
              Blogs
            </a>
          </Link>
        </li>
        <li>
          <Link href="/_cms/files">
            <a
              className={router?.asPath === "/_cms/files" ? styles.active : ""}
            >
              <FontAwesomeIcon
                icon={faFile}
                className={styles.Sidebar__nav_icon}
              />
              Files
            </a>
          </Link>
        </li>
        <li>
          <Link href="/_cms/links">
            <a
              className={router?.asPath === "/_cms/links" ? styles.active : ""}
            >
              <FontAwesomeIcon
                icon={faLinkSlash}
                className={styles.Sidebar__nav_icon}
              />
              Links
            </a>
          </Link>
        </li>
        <li>
          <Link href="/_cms/notes">
            <a
              className={router?.asPath === "/_cms/notes" ? styles.active : ""}
            >
              <FontAwesomeIcon
                icon={faNoteSticky}
                className={styles.Sidebar__nav_icon}
              />
              Notes
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
