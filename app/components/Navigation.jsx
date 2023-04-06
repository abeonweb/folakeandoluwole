"use client"
import React from "react";
import styles from "../css/navigation.module.css";
import Link from "next/link";
import { Tangerine } from "next/font/google";
import { Fade } from "react-awesome-reveal";
import { scrollIntoTheView } from "../utils/scrollIntoTheView";

const tangerine = Tangerine({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--tangerine-font",
});

const Navigation = () => {
  return (
    <header className={`${styles.header} ${tangerine.variable}`}>
      <h1 className={styles.title}>Folake &amp; Oluwole</h1>
      <nav className={styles.nav}>
        <Fade>
          <ul className={styles.navList}>
            <li className={styles.navListItem} onClick={()=>scrollIntoTheView("home")}>
              <Link 
                href="/"
                
              >
                <span className={styles.linkFirstLetter}>H</span>ome
              </Link>
            </li>
            <li className={styles.navListItem} onClick={()=>scrollIntoTheView("gallery")}>
              <Link 
                href="#gallery"
                
              >
                <span className={styles.linkFirstLetter}>G</span>allery
              </Link>
            </li>
            <li className={styles.navListItem} onClick={()=>scrollIntoTheView("locations")}>
              <Link 
                href="#locations"
                
              >
                <span   className={styles.linkFirstLetter}>L</span>ocations
              </Link>
            </li>
          </ul>
        </Fade>
      </nav>
    </header>
  );
};

export default Navigation;
