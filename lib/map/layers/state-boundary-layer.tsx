"use client";

import { Layer, Source } from "react-map-gl";
import { useMapStore } from "../../store/store";
import { stateBoundaryGeojson } from "./state-boundary-data";

export function StateBoundaryLayer() {
  const { layers } = useMapStore();

  return (
    <Source id="state-boundary" type="geojson" data={stateBoundaryGeojson}>
      <Layer
        id="state-boundary-fill"
        type="fill"
        paint={{
          ...layers["state-boundary"].style.fill,
        }}
      />
      <Layer
        id="state-boundary-outline"
        type="line"
        paint={{
          ...layers["state-boundary"].style.line,
        }}
      />
    </Source>
  );
}
