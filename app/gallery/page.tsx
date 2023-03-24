import Image from "next/image"
import styles from "../css/gallery.module.css"

const gallery = () => {
  return (
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
  )
}

export default gallery