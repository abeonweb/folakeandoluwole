import React from 'react'
import styles from "../css/navigation.module.css"
import Link from "next/link"
import { Tangerine } from 'next/font/google'

const tangerine = Tangerine({ subsets: ['latin'], weight: ["400", "700"], variable: '--tangerine-font' })

const Navigation = () => {
  return (
    <header className={`${styles.header} ${tangerine.variable}`}>
        <h1 className={styles.title}>Folake &amp; Oluwole</h1>
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li className={styles.navListItem}>
                    <Link href="/"><span className={styles.linkFirstLetter}>H</span>ome</Link>
                </li>
                <li className={styles.navListItem}>
                    <Link href="/gallery"><span className={styles.linkFirstLetter}>G</span>allery</Link>
                </li>
                <li className={styles.navListItem}>
                    <Link href="#location"><span className={styles.linkFirstLetter}>L</span>ocations</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Navigation