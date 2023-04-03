"use client";
import React from "react";
import Image from "next/image";
import styles from "../css/splash.module.css";
import { AttentionSeeker, Fade } from "react-awesome-reveal";

const Splash = () => {
  return (
        <section id="splash" className={`${styles.section} ${styles.splashImageContainer}`}>   
         <Image className={`${styles.heart} ${styles.heartImage1}`} src={"/wedding-heart.png"} alt="" width={45} height={45}/>
         <Image className={`${styles.heart} ${styles.redHeartImage1}`} src={"/red-wedding-heart.png"} alt="" width={45} height={45}/>
         
          <Image className={`${styles.heart} ${styles.heartImage2}`} src={"/wedding-heart.png"} alt="" width={70} height={70}/>
          <Image className={`${styles.heart} ${styles.redHeartImage2}`} src={"/red-wedding-heart.png"} alt="" width={70} height={70}/>

          <Image className={`${styles.heart} ${styles.heartImage3}`} src={"/wedding-heart.png"} alt="" width={100} height={100}/>
          <Image  className={`${styles.heart} ${styles.redHeartImage3}`} src={"/red-wedding-heart.png"} alt="" width={100} height={100}/>

          <Image className={`${styles.heart} ${styles.heartImage4}`} src={"/wedding-heart.png"} alt="" width={80} height={90}/>
          <Image className={`${styles.heart} ${styles.redHeartImage4}`} src={"/red-wedding-heart.png"} alt="" width={80} height={90}/>
        </section>
  );
};

export default Splash;
