import Head from "next/head";
import Script from "next/script";
import React from "react";
import Header from "../../../components/_cms/Header";
import Sidebar from "../../../components/_cms/Sidebar";
import styles from "../../../styles/_cms/Pages.module.css";

function EditPage(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData(document.forms.edit);
  };

  return (
    <div className={styles.Pages__wrapper}>
      <Head>
        <title>Update Page | CMS</title>
      </Head>
      <Script
        id="ckeditor-js"
        src="https://cdn.ckeditor.com/4.19.0/standard/ckeditor.js"
        onLoad={() => {
          CKEDITOR.replace("content");
        }}
      />
      <Sidebar />
      <div className={styles.Pages__content}>
        <Header />
        <div className={styles.Pages__container}>
          <h3>Update Page/{props?.page?.toUpperCase()}</h3>
          <form
            method="POST"
            name="edit"
            className={styles.Pages__form_con}
            onSubmit={handleSubmit}
          >
            <div className={styles.Pages__form}>
              <label htmlFor="title">Page title</label>
              <input type="text" name="title" id="title" required />
            </div>
            <div className={styles.Pages__form}>
              <label htmlFor="content">Page content</label>
              <textarea name="content" id="content" required></textarea>
            </div>
            <div className={styles.Pages__form}>
              <label htmlFor="meta_title">Meta title</label>
              <input type="text" name="meta_title" id="meta_title" required />
            </div>
            <div className={styles.Pages__form}>
              <label htmlFor="meta_content">Meta title</label>
              <textarea
                name="meta_content"
                id="meta_content"
                required
              ></textarea>
            </div>
            <div className={styles.Pages__form}>
              <label htmlFor="meta_keywords">Meta keywords</label>
              <textarea
                name="meta_keywords"
                id="meta_keywords"
                required
              ></textarea>
            </div>
            <div className={styles.Pages__form}>
              <button>Submit</button>
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
