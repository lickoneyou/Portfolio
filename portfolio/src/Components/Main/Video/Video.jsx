import React, { useRef } from "react";
import styles from "./Video.module.css";
import Title from "../Title/Title";

const Video = ({ language }) => {
  const btn = useRef();
  const player = useRef();
  const toggleVideo = () => {
    let count = 0;
    return () => {
      if (count === 0) {
        btn.current.classList.toggle("btnNone");
        player.current.play();
        count++;
      } else {
        btn.current.classList.toggle("btnNone");
        player.current.pause();
        count--;
      }
    };
  };

  const myToggleVideo = toggleVideo();

  return (
    <section className={styles.video}>
      <Title title={language.video} />
      <div className={styles.playerWrapper}>
        <video
          className={styles.player}
          src="./assets/video/MayadJamie.mp4"
          poster="./assets/video/poster.png"
          ref={player}
        ></video>
        <div className={styles.btn} onClick={myToggleVideo} ref={btn}>
          <img src="./assets/video/playBtn.png" alt="playBtn" />
        </div>
      </div>
    </section>
  );
};

export default Video;
