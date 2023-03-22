import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          
            <Image
              src="/fo1.jpg"
              alt="Couple Image"
              className={styles.image}
              width={100}
              height={24}
              priority
            />
        </div>
      </div>
    </main>
  )
}
