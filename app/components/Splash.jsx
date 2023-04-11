"use client";
import React from "react";
import Image from "next/image";
import { Pinyon_Script } from "next/font/google";
import styles from "../css/splash.module.css";
import { AttentionSeeker, Fade } from "react-awesome-reveal";

const pinyon = Pinyon_Script({
  subsets: ["latin"],
  variable: "--pinyon-font",
  weight: "400",
});

const Splash = () => {
  return (
    <section id="splash" className={`${styles.section} ${pinyon.variable}`}>
      <div className={`${styles.splashImageContainer} `}>
        <Image
          src={"/fo7.jpg"}
          alt=""
          priority
          width={500}
          height={500}
          className={styles.splashImage}
        />
      </div>
      <div className={styles.textContainer}>
        <Fade delay={3000} className={styles.textEffect}>
          <p className={styles.text}>We are getting married.</p>
        </Fade>
      </div>
    </section>
  );
};

export default Splash;
