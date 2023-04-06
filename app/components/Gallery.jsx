import Image from "next/image";
import styles from "../css/gallery.module.css";
import {photos} from "../data"


const photosList = photos.map(({id, src, width, height})=><Image key={id} src={src} alt="" width={width} height={height} className={`${styles.photo} ${styles[`photo${id}`]}`}/>)
const gallery = () => {
  return (
    <section id="gallery" className={`${styles.section}`}>
      <div className={styles.container}>
        {photosList}
      </div>
    </section>
  );
};

export default gallery;
