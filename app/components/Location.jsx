import React from 'react'
import { Pinyon_Script } from "next/font/google";
import styles from "../css/location.module.css"

const pinyon = Pinyon_Script({weight: "400", variable: "--pinyon-font", subsets: ["latin"] })
const Location = (props) => {
  return (
    <div key={props.location.id} className={`${styles.location} ${pinyon.variable}`}>
        <h2 className={styles.title}>{props.location.title}</h2>
        <h3>Time: {props.location.time}</h3>
        <p>Adress: {props.location.address}</p>
        <p>{props.location.info}</p>
        <p>{props.location.mapURL}</p>
    </div>
  )
}

export default Location