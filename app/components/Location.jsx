import React from 'react'
import { Pinyon_Script } from "next/font/google";
import styles from "../css/location.module.css"

// const pinyon = Pinyon_Script({weight: "400", variable: "--pinyon-font", subsets: ["latin"] })
const Location = ({id, title, time, address, mapURL, info}) => {
  return (
    <div key={id} className={`${styles.location} `}>
        <h2 className={styles.title}>{title}</h2>
        <h3>{time}</h3>
        <p>{address}</p>
        <p>{info}</p>
        <p>{mapURL}</p>
    </div>
  )
}

export default Location