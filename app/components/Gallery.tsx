import Image from "next/image";
import styles from "../css/gallery.module.css";
// import Masonry from "react-responsive-masonry"
const gallery = () => {
  return (
    <>
      <h1 className={styles.title}>Gallery</h1>
      <div className={styles.container}>
        {/* <Masonry columnsCount={3}> */}

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
        <Image
          src="/fo4.jpg"
          alt="Couple Image"
          className={styles.image}
          width={400}
          height={500}
          priority
          />
        <Image
          src="/fo5.jpg"
          alt="Couple Image"
          className={styles.image}
          width={400}
          height={500}
          priority
          />
        <Image
          src="/fo6.jpg"
          alt="Couple Image"
          className={styles.image}
          width={400}
          height={500}
          priority
          />
        <Image
          src="/fo7.jpg"
          alt="Couple Image"
          className={styles.image}
          width={400}
          height={500}
          priority
          />
        <Image
          src="/fo8.jpg"
          alt="Couple Image"
          className={styles.image}
          width={400}
          height={500}
          priority
          />
        <Image
          src="/fo9.jpg"
          alt="Couple Image"
          className={styles.image}
          width={400}
          height={500}
          priority
          />
          {/* </Masonry> */}
      </div>
    </>
  );
};

export default gallery;
