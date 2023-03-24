import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import SharedLayout from "./components/SharedLayout"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
        <SharedLayout>
        <div className={styles.description}>
          <div>
            
              <Image
                src="/fo1.jpg"
                alt="Couple Image"
                className={styles.image}
                width={400}
                height={500}
                priority
                />
          </div>
        </div>
    </SharedLayout>
      </main>
  )
}
