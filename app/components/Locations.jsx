"use client";
import Link from "next/link";
import React, { useEffect, useCallback } from "react";
import styles from "../css/location.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { locations } from "../data";
import Location from "./Location";

export default function Locations() {
  // useEffect(() => {
  //   window.addEventListener("scroll", scrollIntoTheView);

  //   return function () {
  //     window.removeEventListener("scroll", scrollIntoTheView);
  //   };
  // },[]);

  // function scrolled() {
  //   const navbar = document.querySelector(".navbar");
  //   const sharedLayout = document.querySelector("#shared-layout");
  //   if (navbar !== null && sharedLayout !== null){
  //       if (window.scrollY > navbar.clientHeight) {
  //           console.log("adding to navbar class");
  //           sharedLayout.classList.add(`sticky`);
  //       } else {
  //           sharedLayout.classList.remove(`sticky`);
  //           console.log("nothing");
  //       }
  //   }
  // }
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const filterType = searchParams.get("location");

  const createNewQuery = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const selectedLocations =
    filterType ? locations.filter((loc) => filterType == loc.id) : locations;
    const display = selectedLocations.map((location) => (
      <Location key={location.id} location={location} />
    ))
  return (
    <section
      id="locations"
      className={`${styles.section} ${styles.container} ${styles.locationContainer}`}
    >
      <h1 className={styles.sectionTitle}>Information of Interest</h1>
      <nav>
        <ul className={styles.filterList}>
          <li>
            <button
              className={filterType == "engagement"? styles["active"]: styles["locationFilterBtn"]}
              onClick={() => {
                router.push(
                  pathName + "?" + createNewQuery("location", "engagement")
                );
              }}
            >
              Engagement
            </button>
          </li>
          <li>
            <button
              className={filterType == "wedding"? styles["active"]: styles["locationFilterBtn"]}
              onClick={() => {
                router.push(
                  pathName + "?" + createNewQuery("location", "wedding")
                );
              }}
            >
              Wedding
            </button>
          </li>
          <li>
            <button
              className={filterType == "reception"? styles["active"]: styles["locationFilterBtn"]}
              onClick={() => {
                router.push(
                  pathName + "?" + createNewQuery("location", "reception")
                );
              }}
            >
              Reception
            </button>
          </li>
        </ul>
      </nav>
      <div>
        {display}
      </div>
    </section>
  );
}
