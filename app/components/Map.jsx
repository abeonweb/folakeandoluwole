import React from "react";
import styles from "../css/location.module.css";

const Map = (props) => {
  return (
    <div className={styles.map}>
      <iframe
        src={props.data}
        width="100%"
        height="100%"
        style={{border: 0,}}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;
