import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Navigation from "../components/Navigation";

import styles from "../styles/Page.module.css";
import app_styles from "../styles/Home.module.css";
import Footer from "../components/Footer";

function Recording() {
  const [isRecording, setIsRecording] = React.useState(false);
  const [isRecorded, setIsRecorded] = React.useState(false);
  const [src, setSrc] = React.useState("");

  const video = React.useRef();
  const recorder = React.useRef();

  let dataChunks = [];

  const startRecord = async () => {
    if (navigator.mediaDevices) {
      setIsRecording(true);
      navigator.mediaDevices
        .getDisplayMedia({
          audio: true,
          video: true,
        })
        .then((stream) => {
          recorder.current = new MediaRecorder(stream);
          recorder.current.ondataavailable = (ev) => {
            dataChunks.push(ev.data);
          };

          recorder.current.start();

          recorder.current.onerror = (ev) => {
            alert("Recorder get innrupted!");
          };

          recorder.current.onstop = (e) => {
            stream.getTracks().forEach((track) => {
              track.stop();
            });
            setIsRecorded(true);
            saveFile(dataChunks);
            dataChunks = [];
          };
        });
    } else {
      alert("Your browser not support screen recording");
    }
  };

  const stopRecord = () => {
    if (recorder.current) {
      recorder.current.stop();
    }
  };

  function saveFile(recordedChunks) {
    const blob = new Blob(recordedChunks, {
      type: "video/webm",
    });
    let filename = "recording-share-easy-" + new Date().getTime(),
      downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = `${filename}.webm`;
    video.current.src = URL.createObjectURL(blob);

    document.body.appendChild(downloadLink);
    downloadLink.click();
    setSrc(downloadLink);
    URL.revokeObjectURL(blob);
    document.body.removeChild(downloadLink);
  }

  return (
    <div className={styles.Page__container}>
      <Head>
        <title>Recording</title>
      </Head>
      <div className={app_styles.App_navigation}>
        <Link href="/">
          <div className={app_styles.App_logo}>
            <Image src="/logo.png" alt="share easy" width="60" height="60" />
            <h1>SE</h1>
          </div>
        </Link>
        <Navigation />
      </div>
      <div className={styles.Page__main}>
        <div className={styles.Page__main_title}>
          <h1>Record Screen and Share Eaisly</h1>
        </div>

        <div className={styles.Page__main_content}>
          <div
            style={{
              maxWidth: "500px",
              width: "100%",
              margin: "1rem auto",
              border: "1px solid #fff",
              display: src ? "block" : "none",
            }}
          >
            <video
              style={{ width: "100%", heigth: "100%" }}
              autoPlay={true}
              controls={true}
              ref={video}
            />
          </div>

          <div
            style={{
              maxWidth: "500px",
              width: "100%",
              margin: "1rem auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <button
              onClick={startRecord}
              disabled={isRecording}
              className={styles.button}
            >
              Start
            </button>
            <button
              onClick={stopRecord}
              disabled={isRecorded}
              className={styles.button}
            >
              Stop
            </button>
          </div>
        </div>
      </div>
      <div className={styles.Page__footer}>
        <Footer />
      </div>
    </div>
  );
}

export default Recording;
