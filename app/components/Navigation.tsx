import React from 'react'
import styles from "../css/navigation.module.css"
import Link from "next/link"

const Navigation = () => {
  return (
    <header className={styles.header}>
        <h1 className={styles.title}>Folake &amp; Oluwole</h1>
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/gallery">Gallery</Link>
                </li>
                <li>
                    <Link href="#location">Locations</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Navigation