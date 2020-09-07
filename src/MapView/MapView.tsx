import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import getMap from "../LatLongMap";
import './MapView.css'

const TOKEN =
  "pk.eyJ1IjoiY29kZS15YXJkIiwiYSI6ImNrZXA4amE1ODNya3Yyc2x0Nm05dDIzYWgifQ.oERLhMgD_HpHt3dXn_MPpg";

function MapView({ json }: { json: any }) {
  const [viewport, setViewPort] = useState({
    width: "100%",
    height: 900,
    latitude: 21,
    longitude: 78,
    zoom: 4,
  });

  const _onViewportChange = (viewport: any) => setViewPort({ ...viewport });

  let markerArray = [];
  const map = getMap();
  for (let i = 0; i < json.length; i++) {
    const stateName = json[i].name;
    if (map.has(stateName)) {
      markerArray.push({
        name: stateName,
        latitude: map.get(stateName)[0],
        longitude: map.get(stateName)[1],
        active: json[i].active,
      });
    } else {
      console.log(json[i]);
    }
  }

  console.log(markerArray);

  return (
    <div style={{ zIndex: -1 }}>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={TOKEN}
        mapStyle="mapbox://styles/mapbox/dark-v8"
        onViewportChange={_onViewportChange}
      >
        <Markers data={markerArray}></Markers>
      </ReactMapGL>
    </div>
  );
}

function Markers({ data }: { data: any;}) {
  return data.map((state: any) => (
    <Marker
      key={state.name}
      latitude={Number(state.latitude)}
      longitude={Number(state.longitude)}
    >
      <h6 className="marker">{state.active}</h6>
    </Marker>
  ));
}

export default MapView;
