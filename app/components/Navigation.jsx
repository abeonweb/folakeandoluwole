"use client";
import React, { useEffect } from "react";
import styles from "../css/navigation.module.css";
import Link from "next/link";
import Image from "next/image";
import { Pinyon_Script } from "next/font/google";
import { Fade } from "react-awesome-reveal";
import { scrollIntoTheView } from "../utils/scrollIntoTheView";
import useOpen from "../utils/useOpen";

const pinyon = Pinyon_Script({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--pinyon-font",
});

const Navigation = () => {
  const { open, handleClick } = useOpen();

  useEffect(() => {
    window.addEventListener("scroll", iScrolled);

    return function () {
      window.removeEventListener("scroll", iScrolled);
    };
  }, []);

  function iScrolled() {
    const header = document.querySelector("#header");
    const main = document.querySelector("#home");
    if (window.pageYOffset > header.clientHeight) main.classList.add("sticky");
    else main.classList.remove("sticky");
  }
  return (
    <header
      id="header"
      className={`${styles.header} ${pinyon.variable} ${
        open ? styles.navOpen : null
      }`}
    >
      <div className={styles.navContent}>
        <div className={styles.navLogo}>
          <div>
            <Link href="/" className={styles.navTitleLink}>
              <h1 className={styles.title}>Folake &amp; Oluwole</h1>
            </Link>
          </div>
        </div>
        <div onClick={handleClick} className={styles.menuIcon}>
          <span className={styles.hamburger}></span>
        </div>
        <nav className={styles.nav}>
          <Fade>
            <ul className={styles.navList}>
              <li
                className={styles.navListItem}
                onClick={() => scrollIntoTheView("home")}
              >
                <Link href="/" onClick={handleClick} className={styles.navLink}>
                  Home
                </Link>
              </li>
              <li
                className={styles.navListItem}
                onClick={() => scrollIntoTheView("gallery")}
              >
                <Link
                  href="#gallery"
                  onClick={handleClick}
                  className={styles.navLink}
                >
                  Gallery
                </Link>
              </li>
              <li
                className={styles.navListItem}
                onClick={() => scrollIntoTheView("locations")}
              >
                <Link
                  href="#locations"
                  onClick={handleClick}
                  className={styles.navLink}
                >
                  Locations
                </Link>
              </li>
            </ul>
          </Fade>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
