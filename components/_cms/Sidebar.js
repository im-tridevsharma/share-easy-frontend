import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "../../styles/_cms/component/Sidebar.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDharmachakra,
  faPager,
  faLinkSlash,
  faNoteSticky,
} from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";

function Sidebar() {
  const router = useRouter();

  useEffect(() => {
    if (document.querySelector(".Sidebar_active__Aqh0Z")) {
      document.querySelector(".Sidebar_active__Aqh0Z").scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }, [router?.asPath]);

  return (
    <div className={styles.Sidebar__container}>
      <div className={styles.Sidebar__header}>
        <h2>
          Share Easy{" "}
          <small style={{ fontSize: ".5rem", lineHeight: 0 }}>CMS</small>
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
              className={
                router?.asPath === "/_cms/pages" ||
                (router?.asPath?.split("/").length > 3 &&
                  router?.asPath?.split("/")[2] === "pages")
                  ? styles.active
                  : ""
              }
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
