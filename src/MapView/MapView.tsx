import React, { useState } from "react";
import ReactMapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const TOKEN =
  "MAPBOX_API_KEY";



const MapView = () => {
  const [viewport, setViewPort] = useState({
    width: "100%",
    height: 900,
    latitude: 0,
    longitude: 0,
    zoom: 2,
  });

  const _onViewportChange = (viewport:any) =>
    setViewPort({ ...viewport});

  return (
    <div style={{ zIndex:-1 }}>
      
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={TOKEN}
        mapStyle="mapbox://styles/mapbox/light-v8"
        onViewportChange={_onViewportChange}
      >
      </ReactMapGL>
    </div>
  );
};

export default MapView;
