import Image from 'next/image'
import { Inter} from 'next/font/google'
import styles from './css/page.module.css'

const inter = Inter({ subsets: ['latin'], variable: '--inter-font' })

export default function Home() {
  return (
    <main className={`${styles.homeMain} ${inter.variable}`}>
        <div className={styles.splashImageContainer}>
            
              <Image
                src="/fo_logo.png"
                alt="Couple Logo"
                className={styles.splashImage}
                width={300}
                height={300}
                priority
                />
        </div>
      </main>
  )
}
