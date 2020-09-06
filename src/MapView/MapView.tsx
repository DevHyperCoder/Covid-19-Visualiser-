import React, { useState } from "react";
import ReactMapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const TOKEN =
  "MAPBOX_API_TOKEN";

function MapView({json}:{json:any}) {
  const [viewport, setViewPort] = useState({
    width: "100%",
    height: 900,
    latitude: 21,
    longitude: 78,
    zoom: 4,
  });

  const _onViewportChange = (viewport:any) =>
    setViewPort({ ...viewport});

  // Fetch data from the API
  console.log(json)
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
