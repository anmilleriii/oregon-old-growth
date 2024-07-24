"use client";

import * as turf from "@turf/turf";
import { Layer, Source } from "react-map-gl";
import { stateBoundaryGeojson } from "./state-boundary-data";

export function GFWLossLayer() {
  // <Source id='weatherSource' type='raster' tiles={["https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=874718354841f0e0250b4b06a05a971e"]} tileSize={256}>

  const bounds = turf.bbox(stateBoundaryGeojson);
  return (
    <Source
      id="gfw-loss"
      type="raster"
      // tiles={["http://localhost:4200/{z}/{x}/{y}/w.jpeg"]}
      tiles={["http://localhost:4200/gfw-loss-data.jpeg"]}
      scheme="tms"
      bounds={bounds}
      // tileSize={1}
      // tileSize={256}
      // url="http://localhost:4200/gfw-loss-data.jpeg"
    >
      <Layer
        id="gfw-loss"
        type="raster"
        source="gfw-loss"
        paint={{
          "raster-opacity": 1,
        }}
      />
    </Source>
  );
}
