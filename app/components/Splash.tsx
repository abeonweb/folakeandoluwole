"use client";
import React from "react";
import Image from "next/image";
import styles from "../css/splash.module.css";
import WaterWave from "react-water-wave";
import { AttentionSeeker } from "react-awesome-reveal";

const Splash = () => {
  return (
    // <WaterWave imageUrl={"/fo_empty_bg.png"} 
    // style={{ width: '100%', height: '100%', backgroundSize: 'cover' }}
    // >
    //   {() => (
        <section id="splash" className={`${styles.section} ${styles.splashImageContainer}`}>   
         <AttentionSeeker effect={"pulse"} className={`${styles.heart} ${styles.heart1}`}>
          <Image  className={styles.heartImage1} src={"/wedding-heart.png"} alt="" width={45} height={45}/>
         </AttentionSeeker>
         <AttentionSeeker effect={"pulse"} delay={5000} className={`${styles.heart} ${styles.heart2}`}>
          <Image className={styles.heartImage2} src={"/wedding-heart.png"} alt="" width={70} height={70}/>
         </AttentionSeeker>
         <AttentionSeeker effect={"pulse"} delay={5000} className={`${styles.heart} ${styles.heart3}`}>
          <Image className={styles.heartImage3} src={"/wedding-heart.png"} alt="" width={100} height={100}/>
         </AttentionSeeker>
         <AttentionSeeker effect={"pulse"} delay={3000} className={`${styles.heart} ${styles.heart4}`}>
          <Image className={styles.heartImage4} src={"/wedding-heart.png"} alt="" width={80} height={90}/>
         </AttentionSeeker>
        </section>
    //   )}
    // </WaterWave>
  );
};

export default Splash;
