import Head from "next/head";
import React from "react";
import Header from "../../../components/_cms/Header";
import Sidebar from "../../../components/_cms/Sidebar";
import { CKEditor } from "ckeditor4-react";
import styles from "../../../styles/_cms/Pages.module.css";

function EditPage(props) {
  return (
    <div className={styles.Pages__wrapper}>
      <Head>
        <title>Update Page | CMS</title>
      </Head>
      <Sidebar />
      <div className={styles.Pages__content}>
        <Header />
        <div className={styles.Pages__container}>
          <h3>Update Page/{props?.page?.toUpperCase()}</h3>
          <form method="POST" name="edit" className={styles.Pages__form_con}>
            <div className={styles.Pages__form}>
              <label htmlFor="title">Page title</label>
              <input type="text" name="title" />
            </div>
            <div className={styles.Pages__form}>
              <label htmlFor="content">Page content</label>
              <CKEditor
                initData={
                  <p>
                    This is a CKEditor 4 WYSIWYG editor instance created by ️⚛️
                    React.
                  </p>
                }
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

EditPage.getInitialProps = async (ctx) => {
  return {
    page: ctx?.query?.page,
  };
};

export default EditPage;
