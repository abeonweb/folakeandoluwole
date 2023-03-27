import Image from "next/image";
import styles from "../css/gallery.module.css";

const gallery = () => {
  return (
    <>
      <h1 className={styles.title}>Gallery</h1>
      <div className={styles.container}>
        <Image
          src="/fo1.jpg"
          alt="Couple Image"
          className={styles.image}
          width={400}
          height={500}
          priority
        />
        <Image
          src="/fo2.jpg"
          alt="Couple Image"
          className={styles.image}
          width={400}
          height={500}
          priority
        />
        <Image
          src="/fo3.jpg"
          alt="Couple Image"
          className={styles.image}
          width={400}
          height={500}
          priority
        />
      </div>
    </>
  );
};

export default gallery;
