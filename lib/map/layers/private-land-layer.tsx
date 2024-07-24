"use client";

import { Layer, Source } from "react-map-gl";
import { useMapStore } from "../../store/store";
import { privateLandGeojson } from "./private-land-data";

export function PrivateLandLayer() {
  const { layers } = useMapStore();

  return (
    <Source id="private-land" type="geojson" data={privateLandGeojson}>
      <Layer
        id="private-land-fill"
        type="fill"
        paint={{
          ...layers["private-land"].style.fill,
        }}
      />
      <Layer
        id="private-land-outline"
        type="line"
        paint={{
          ...layers["private-land"].style.line,
        }}
      />
    </Source>
  );
}
