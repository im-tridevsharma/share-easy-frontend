import Head from "next/head";
import React from "react";

import styles from "../../styles/_cms/Login.module.css";
import loader from "../../public/loading.gif";

function Login() {
  const [loginData, setLoginData] = React.useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = React.useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(loginData);
  };

  return (
    <div className={styles.Login__container}>
      <Head>
        <title>CMS Login</title>
      </Head>
      <div className={styles.Login__header}>
        <h1>CMS Login</h1>
      </div>
      <form className={styles.Login__form} onSubmit={handleLogin}>
        <div className={styles.Login__form_input}>
          <label>Username</label>
          <input
            type="text"
            value={loginData?.username}
            onChange={(e) =>
              setLoginData((prev) => ({ ...prev, username: e.target.value }))
            }
          />
        </div>
        <div className={styles.Login__form_input}>
          <label>Password</label>
          <input
            type="password"
            value={loginData?.password}
            onChange={(e) =>
              setLoginData((prev) => ({ ...prev, password: e.target.value }))
            }
          />
        </div>
        <div className={styles.Login__form_input}>
          <button>Login</button>
        </div>
        {loading && (
          <div className="loader">
            <div className="loading">
              <img src={loader?.src} />
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default Login;
