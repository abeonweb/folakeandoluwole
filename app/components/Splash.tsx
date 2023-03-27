import React, { useEffect } from "react";
import Image from "next/image";
import styles from "../css/page.module.css";

const Splash = () => {


  return (
    <section id="home" className={styles.splashImageContainer}>
      <Image
        src="/fo_logo.png"
        alt="Couple Logo"
        className={styles.splashImage}
        width={300}
        height={300}
        priority
      />
    </section>
  );
};

export default Splash;
