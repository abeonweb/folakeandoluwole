import React from "react";

const Map = (props) => {
  return (
    <div>
      <iframe
        width="100%"
        height="100%"
        id="gmap_canvas"
        src={props.data}
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;
