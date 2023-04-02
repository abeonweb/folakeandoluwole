"use client";
import React from "react";
import Image from "next/image";
import styles from "../css/splash.module.css";
import WaterWave from "react-water-wave";
import { AttentionSeeker, Fade } from "react-awesome-reveal";

const Splash = () => {
  return (
    <WaterWave imageUrl={"/fo_empty_bg.png"} 
    style={{ width: '100%', height: '100%', backgroundSize: 'cover' }}
    >
      {() => (
        <section id="splash" className={`${styles.section} ${styles.splashImageContainer}`}>   
         <Image className={`${styles.heart} ${styles.heartImage1}`} src={"/wedding-heart.png"} alt="" width={45} height={45}/>
         <Image className={`${styles.heart} ${styles.redHeartImage1}`} src={"/red-wedding-heart2.png"} alt="" width={45} height={45}/>
         
          <Image className={`${styles.heart} ${styles.heartImage2}`} src={"/wedding-heart.png"} alt="" width={70} height={70}/>
          <Image className={`${styles.heart} ${styles.redHeartImage2}`} src={"/red-wedding-heart2.png"} alt="" width={70} height={70}/>

          <Image className={`${styles.heart} ${styles.heartImage3}`} src={"/wedding-heart.png"} alt="" width={100} height={100}/>
          <Image  className={`${styles.heart} ${styles.redHeartImage3}`} src={"/red-wedding-heart2.png"} alt="" width={100} height={100}/>

          <Image className={`${styles.heart} ${styles.heartImage4}`} src={"/wedding-heart.png"} alt="" width={80} height={90}/>
          <Image className={`${styles.heart} ${styles.redHeartImage4}`} src={"/red-wedding-heart2.png"} alt="" width={80} height={90}/>
        </section>
      )}
    </WaterWave>
  );
};

export default Splash;
